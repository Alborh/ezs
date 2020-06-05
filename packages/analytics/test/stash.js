import assert from 'assert';
import from from 'from';
import ezs from '../../core/src';
import statements from '../src';

ezs.addPath(__dirname);
ezs.use(statements);

const handle = [];
let sid;
describe('first', () => {
    test('stash', (done) => {
        const input = [
            { a: 1, b: 'a' },
            { a: 2, b: 'b' },
            { a: 3, b: 'c' },
            { a: 4, b: 'd' },
            { a: 5, b: 'e' },
            { a: 6, b: 'f' },
        ];
        from(input)
            .pipe(ezs('stash', { path: 'c' }))
            .pipe(ezs.catch())
            .on('error', done)
            .on('data', (chunk) => {
                handle.push(chunk);
            })
            .on('end', () => {
                assert.equal(handle.length, 6);
                assert.equal(handle[0].b, 'a');
                assert.equal(handle[1].b, 'b');
                assert.equal(handle[2].b, 'c');
                assert.equal(handle[3].b, 'd');
                assert.equal(handle[4].b, 'e');
                assert.equal(handle[5].b, 'f');
                sid = handle[0].c;
                assert.equal(handle[1].c, sid);
                assert.equal(handle[2].c, sid);
                assert.equal(handle[3].c, sid);
                assert.equal(handle[4].c, sid);
                assert.equal(handle[5].c, sid);
                done();
            });
    });
});
describe('second', () => {
    test('unstash', (done) => {
        const input = [
            { a: 11, b: 'aa' },
            { a: 22, b: 'bb' },
            { a: 33, b: 'cc' },
            { a: 44, b: 'dd' },
            { a: 55, b: 'ee' },
            { a: 66, b: 'ff' },
        ];
        const output = [];
        from(input)
            .pipe(ezs('unstash', { from: sid }))
            .pipe(ezs.catch())
            .on('error', done)
            .on('data', (chunk) => {
                output.push(chunk);
            })
            .on('end', () => {
                assert.equal(output.length, 6);
                assert.equal(output[0].b, 'a');
                assert.equal(output[1].b, 'b');
                assert.equal(output[2].b, 'c');
                assert.equal(output[3].b, 'd');
                assert.equal(output[4].b, 'e');
                assert.equal(output[5].b, 'f');
                done();
            });
    });
});
describe('stash/unstash', () => {
    test('with script', (done) => {
        const input = [
            { a: 1, b: 'a' },
            { a: 2, b: 'b' },
            { a: 3, b: 'c' },
            { a: 4, b: 'd' },
            { a: 5, b: 'e' },
            { a: 6, b: 'f' },
        ];
        const script = `
            [use]
            plugin = analytics

            [stash]
            path = c

            [replace]
            path = is
            value = empty

            path = c
            value = get('c')
            [unstash]
            from = get('c')
        `;
        const output = [];
        from(input)
            .pipe(ezs('delegate', { script }))
            .pipe(ezs.catch())
            .on('error', done)
            .on('data', (chunk) => {
                output.push(chunk);
            })
            .on('end', () => {
                assert.equal(output.length, 6);
                assert.equal(output[0].b, 'a');
                assert.equal(output[1].b, 'b');
                assert.equal(output[2].b, 'c');
                assert.equal(output[3].b, 'd');
                assert.equal(output[4].b, 'e');
                assert.equal(output[5].b, 'f');
                done();
            });
    });
});
