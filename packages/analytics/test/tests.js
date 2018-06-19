const assert = require('assert');
const from = require('from');
const ezs = require('ezs');

ezs.use(require('../lib'));

describe('test', () => {
    it('distinct', (done) => {
        const res = [];
        from([
            { a: 'x', b: 'z' },
            { a: 't', b: 'z' },
            { a: 't', b: 'z' },
            { a: 'x', b: 'z' },
            { a: 'x', b: 'z' },
        ])
            .pipe(ezs('distinct', { path: 'a' }))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(5, res.length);
                assert.equal('x', res[0]._id);
                assert.equal(1, res[0].value);
                assert.equal('t', res[1]._id);
                assert.equal(1, res[1].value);
                done();
            });
    });
    it('reducing', (done) => {
        const res = [];
        from([
            { a: 'x', b: 'z' },
            { a: 't', b: 'z' },
            { a: 't', b: 'z' },
            { a: 'x', b: 'z' },
            { a: 'x', b: 'z' },
        ])
            .pipe(ezs('distinct', { path: 'a' }))
            .pipe(ezs('reducing'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(2, res.length);
                assert.equal(3, res[0].value.length);
                assert.equal(2, res[1].value.length);
                done();
            });
    });
    it('summing', (done) => {
        const res = [];
        from([
            { a: 'x', b: 'z' },
            { a: 't', b: 'z' },
            { a: 't', b: 'z' },
            { a: 'x', b: 'z' },
            { a: 'x', b: 'z' },
        ])
            .pipe(ezs('distinct', { path: 'a' }))
            .pipe(ezs('reducing'))
            .pipe(ezs('summing'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(2, res.length);
                assert.equal(3, res[0].value);
                assert.equal(2, res[1].value);
                done();
            });
    });
    it('combining', (done) => {
        const res = [];
        from([
            { _id: 'x', value: 2 },
            { _id: 't', value: 2 },
            { _id: 'x', value: 3 },
            { _id: 'x', value: 5 },
        ])
            .pipe(ezs('reducing'))
            .pipe(ezs('summing'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(2, res.length);
                assert.equal(10, res[0].value);
                assert.equal(2, res[1].value);
                done();
            });
    });
    it('count', (done) => {
        const res = [];
        from([
            { a: 'x', b: 'z' },
            { a: 't', b: 'z' },
            { a: 't', b: 'z' },
            { c: 'x', b: 'z' },
            { a: 'x', b: 'z' },
        ])
            .pipe(ezs('count', { path: 'a' }))
            .pipe(ezs('reducing'))
            .pipe(ezs('summing'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(1, res.length);
                assert.equal(4, res[0].value);
                done();
            });
    });
    it('graph', (done) => {
        const res = [];
        from([
            { a: ['x', 'b', 'z'] },
            { a: ['t', 'b', 'z'] },
            { a: ['t', 'c', 'z'] },
            { a: ['y', 'd', 'z'] },
            { a: ['x', 'b', 'z'] },
        ])
            .pipe(ezs('graph', { path: 'a' }))
            .pipe(ezs('reducing'))
            .pipe(ezs('summing'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(10, res.length);
                assert.equal(2, res[0].value);
                done();
            });
    });
    it('groupby', (done) => {
        const res = [];
        from([
            { a: ['m', 'n', 'o'] },
            { a: ['p', 'q', 'r'] },
            { a: ['s', 't', 'u'] },
            { b: ['y', 'd', 'z'] },
            { b: ['x', 'b', 'z'] },
            { c: ['x', 'b', 'z'] },
        ])
            .pipe(ezs('groupby', { path: ['a', 'b'] }))
            .pipe(ezs('reducing'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(2, res.length);
                assert.equal(9, res[0].value.length);
                done();
            });
    });
    it('keys', (done) => {
        const res = [];
        from([
            { a: 1, b: 2 },
            { a: 1, c: 3 },
            { a: 2, d: 4 },
            { b: 1, c: 5 },
            { b: 4, d: 6 },
            { c: 1 },
        ])
            .pipe(ezs('keys'))
            .pipe(ezs('reducing'))
            .pipe(ezs('summing'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(4, res.length);
                assert.equal(3, res[0].value);
                done();
            });
    });

    it('maximizing', (done) => {
        const res = [];
        from([
            { _id: 1, value: [2, 3, 4, 5, 1] },
            { _id: 1, value: [2, 6, 4, 5, 1] },
            { _id: 1, value: [2, 3, 7, 5, 1] },
            { _id: 1, value: [2, 3, 4, 8, 1] },
            { _id: 1, value: [9, 3, 4, 5, 1] },
            { _id: 1, value: [2, 3, 4, 5, 10] },
        ])
            .pipe(ezs('maximizing'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(6, res.length);
                assert.equal(5, res[0].value);
                done();
            });
    });

    it('minimizing', (done) => {
        const res = [];
        from([
            { _id: 1, value: [2, 3, 4, 5, 1] },
            { _id: 1, value: [2, 6, 4, 5, 1] },
            { _id: 1, value: [2, 3, 7, 5, 1] },
            { _id: 1, value: [2, 3, 4, 8, 1] },
            { _id: 1, value: [9, 3, 4, 5, 1] },
            { _id: 1, value: [2, 3, 4, 5, 10] },
        ])
            .pipe(ezs('minimizing'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(6, res.length);
                assert.equal(1, res[0].value);
                done();
            });
    });

    it('merging', (done) => {
        const res = [];
        from([
            { _id: 1, value: { a: 1 } },
            { _id: 2, value: { b: 1 } },
            { _id: 1, value: { c: 1 } },
            { _id: 2, value: { d: 1 } },
            { _id: 1, value: { e: 1 } },
            { _id: 1, value: { f: 1 } },
        ])
            .pipe(ezs('reducing'))
          .pipe(ezs('merging'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(2, res.length);
                assert.equal(1, res[0].value.a);
                assert.equal(1, res[0].value.c);
                assert.equal(1, res[0].value.e);
                assert.equal(1, res[0].value.f);
                assert.equal(1, res[1].value.b);
                assert.equal(1, res[1].value.d);
                done();
            });
    });

    it('pair', (done) => {
        const res = [];
        from([
            { a: ['x', 'b', 'z'] },
            { a: ['t', 'b', 'z'] },
            { a: ['t', 'c', 'z'] },
            { a: ['y', 'd', 'z'] },
            { a: ['x', 'b', 'z'] },
        ])
            .pipe(ezs('pair', { path: 'a' }))
            .pipe(ezs('reducing'))
            .pipe(ezs('summing'))
            .on('data', (chunk) => {
                assert(typeof chunk === 'object');
                res.push(chunk);
            })
            .on('end', () => {
                assert.equal(10, res.length);
                assert.equal(2, res[0].value);
                done();
            });
    });
});