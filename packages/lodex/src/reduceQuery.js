import hasher from 'node-object-hash';
import set from 'lodash.set';

import { MongoClient } from 'mongodb';
import reducers from './reducers';

const hashCoerce = hasher({ sort: false, coerce: true });

/**
 * Take an `Object` containing a MongoDB query and throw the result
 *
 * @name LodexReduceQuery
 * @param {String}  [reducer]   The name of the reducer to use
 * @param {Object}  [referer]   Some data sould be injetc on each result object
 * @param {Object}  [filter]    MongoDB filter
 * @param {Object}  [minValue]  limit the result
 * @param {Object}  [maxValue]  limit the result
 * @param {Object}  [maxSize]   limit the result
 * @param {Object}  [orderBy]   sort the result
 * @returns {Object}
 */
export const createFunction = () => async function LodexReduceQuery(data, feed) {
    if (this.isLast()) {
        return feed.close();
    }

    const referer = this.getParam('referer', data.referer);
    const filter = this.getParam('filter', data.filter || {});
    filter.removedAt = { $exists: false }; // Ignore removed resources
    const field = this.getParam(
        'field',
        data.field || data.$field || 'uri',
    );
    const minValue = this.getParam('minValue', data.minValue);
    const maxValue = this.getParam('maxValue', data.maxValue);
    const orderBy = this.getParam('orderBy', data.orderBy);
    const maxSize = this.getParam('maxSize', data.maxSize || 1000000);

    const reducer = this.getParam('reducer');

    const { map, reduce, finalize } = reducers[reducer];
    const fds = Array.isArray(field) ? field : [field];
    const fields = fds.filter(Boolean);
    const collName = String('mp_').concat(
        hashCoerce.hash({ reducer, fields }),
    );
    const options = {
        query: filter,
        finalize,
        out: {
            replace: collName,
        },
        scope: {
            fields,
        },
    };
    const connectionStringURI = this.getParam(
        'connectionStringURI',
        data.connectionStringURI || '',
    );
    const client = await MongoClient.connect(
        connectionStringURI,
        {
            useNewUrlParser: true,
        },
    );
    const db = client.db();
    const collection = db.collection('publishedDataset');

    if (!reducer) {
        throw new Error('reducer= must be defined as parameter.');
    }
    if (!reducers[reducer]) {
        throw new Error(`Unknown reducer '${reducer}'`);
    }
    const result = await collection.mapReduce(map, reduce, options);

    const total = await result.count();

    const findFilter = {};

    if (minValue) {
        findFilter.value = {
            $gte: Number(minValue),
        };
    }

    if (maxValue) {
        findFilter.value = {
            ...(findFilter.value || {}),
            $lte: Number(maxValue),
        };
    }

    const [order, dir] = String(orderBy).split('/');
    const sort = order && dir ? ({
        [order]: dir === 'asc' ? 1 : -1,
    }) : ({});
    const cursor = result.find(findFilter);
    const count = await cursor.count();

    if (total === 0 || count === 0) {
        return feed.send({ total: 0 });
    }
    const stream = cursor
        .sort(sort)
        .limit(Number(maxSize));
    stream.on('data', (data1) => {
        if (typeof data1 === 'object') {
            if (data1) {
                set(data1, 'total', total);
            }
            if (referer) {
                set(data1, 'referer', referer);
            }
            feed.write(data1);
        }
    });
    stream.on('error', (error) => {
        feed.write(error);
    });
    stream.on('end', () => {
        feed.end();
        client.close();
    });
};

export default {
    reduceQuery: createFunction(),
};
