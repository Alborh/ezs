import from from 'from';
import ezs from '../../core/src';
import statements from '.';

ezs.use(statements);

describe('$UPPERCASE', () => {
    test('with valid parameter', (done) => {
        const script = `
            [$UPPERCASE]
            field = b
            gap = 3

            [exchange]
            value = omit('$origin')
        `;
        const input = [
            { a: 1, b: 'un deux', c: true },
            { a: 2, b: 'un trois', c: true },
            { a: 3, b: 'un quatre', c: false },
            { a: 4, b: 'un cinq', c: true },
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
                expect(output[0].b).toEqual('UN DEUX');
                expect(output[1].b).toEqual('UN TROIS');
                expect(output[2].b).toEqual('UN QUATRE');
                expect(output[3].b).toEqual('UN CINQ');
                done();
            });
    });
});
