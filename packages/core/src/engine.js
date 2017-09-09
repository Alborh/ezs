import { Transform } from 'stream';
import Feed from './feed';
import Shell from './shell';

export default class Engine extends Transform {
    constructor(ezs, func, params, tagname) {
        super({ objectMode: true });
        this.func = func;
        this.index = 0;
        this.tagname = tagname;
        this.params = params || {};
        this.scope = {};
        this.ezs = ezs;
    }

    _transform(chunk, encoding, done) {
        this.index += 1;
        if (this.tagname && chunk.tagname) {
            console.log('#', this.index, 'compare', this.tagname);
        }
        if (chunk instanceof Error) {
            this.push(chunk);
            done();
        } else if (this.tagname && chunk.__tagName && this.tagname === chunk.__tagName()) {
            this.execWith(chunk, done);
        } else if (this.tagname && chunk.__tagName && this.tagname !== chunk.__tagName()) {
            this.push(chunk);
            done();
        } else if (this.tagname && !chunk.__tagName) {
            this.push(chunk);
            done();
        } else {
            this.execWith(chunk, done);
        }
    }

    _flush(done) {
        this.execWith(null, done);
    }

    execWith(chunk, done) {
        const push = (data) => {
            if (data instanceof Error) {
                return this.pushError(data);
            }
            if (this.tagname && chunk && chunk.__tagName && typeof data === 'object') {
                data.__tagName = chunk.__tagName;
            }
            return this.push(data);
        };
        const feed = new Feed(push, done);
        this.scope.isFirst = () => (this.index === 1);
        this.scope.getIndex = () => this.index;
        this.scope.isLast = () => (chunk === null);
        this.scope.getParams = () => this.params;
        this.scope.ezs = this.ezs;

        try {
            const context = typeof chunk === 'object' ? { ...this.scope, ...chunk } : chunk;
            this.scope.getParam = (name, defval) =>
                (this.params[name] ? Shell(this.params[name], context) : defval);
            this.func.call(this.scope, chunk, feed);
        } catch (e) {
            this.pushError(e);
            done();
        }
    }

    pushError(e) {
        const msg = ' in item #'.concat(this.index);
        const stack = e.stack.split('\n').slice(0, 2);
        const err = new Error(stack[0].concat(msg).concat('\n').concat(stack[1]));
        if (process.env.NODE_ENV !== 'production') {
            console.error(err.message);
        }
        this.push(err);
    }

}
