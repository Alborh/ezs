import from from 'from';
import ezs from '../../core/src';
import statements from '.';

ezs.use(statements);

describe('$COLUMN', () => {
    test('with valid parameter', (done) => {
        const script = `
            [$COLUMN]
            field = d
            column = b

            [exchange]
            value = omit('$origin')
        `;
        const input = [
            { a: '1', b: 'un', c: true },
            { a: '2', b: 'deux', c: true },
            { a: '3', b: 'trois', c: false },
            { a: '4', b: 'quatre', c: true },
        ];
        const output = [];
        from(input)
            .pipe(ezs('delegate', { script }))
            .pipe(ezs.catch())
            .on('error', done)
            .on('data', (chunk) => {
                expect(chunk).toEqual(expect.any(Object));
                output.push(chunk);
            })
            .on('end', () => {
                expect(output.length).toBe(4);
                expect(output[0].d).toEqual('un');
                expect(output[1].d).toEqual('deux');
                expect(output[2].d).toEqual('trois');
                expect(output[3].d).toEqual('quatre');
                done();
            });
    });
});
