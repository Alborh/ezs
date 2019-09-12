import _ from 'lodash';
/**
 * Take `Object` and throw the same object but keep only
 * specific fields
 *
 * @name keep
 * @param {String} [path] path of field to keep
 * @returns {Object}
 */
export default function keep(data, feed) {
    if (this.isLast()) {
        return feed.close();
    }
    let keys = this.getParam('path', []);
    if (!Array.isArray(keys)) {
        keys = [keys];
    }
    const obj = {};
    keys.filter((k) => typeof k === 'string').forEach((key) => _.set(obj, key, _.get(data, key)));
    return feed.send(obj);
}
