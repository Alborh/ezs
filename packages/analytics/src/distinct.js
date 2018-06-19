import get from 'lodash.get';
import core from './core';
/**
 * Take `Object` object getting some fields with json path, and do ...
 *
 * @name distinct
 * @param {String} path
 * @returns {Object}
 */
export default function distinct(data, feed) {
    if (this.isLast()) {
        feed.close();
        return;
    }
    let fields = this.getParam('path', []);
    if (!Array.isArray(fields)) {
        fields = [fields];
    }

    fields
        .filter(k => typeof k === 'string')
        .map(key => get(data, key))
        .filter(x => x)
        .map(item => (item instanceof Array ? item : [item]))
        .reduce((pre, cur) => pre.concat(cur), [])
        .forEach(item => feed.write(core(item, 1)));
    feed.end();
}