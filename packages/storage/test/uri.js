import {
    isURI,
    parseURI,
    ncda,
    checkdigit,
} from '../src/uri';

describe('isURI', () => {
    test('with null', () => {
        expect(isURI()).toBe(false);
    });
    test('with blank', () => {
        expect(isURI('')).toBe(false);
    });
    test('with object', () => {
        expect(isURI({})).toBe(false);
    });
    test('with number', () => {
        expect(isURI(12345)).toBe(false);
    });
    test('with no slash', () => {
        expect(isURI('uid:XXX-YYYYYYYY-Z')).toBe(false);
    });
    test('with unknow scheme', () => {
        expect(isURI('toto:/XXX-YYYYYYYY-Z')).toBe(false);
    });
    test('with no scheme', () => {
        expect(isURI('XXX-YYYYYYYY-Z')).toBe(false);
    });
    test('with uri', () => {
        expect(isURI('uid:/XXX')).toBe(true);
    });
});

describe('ncda', () => {
    test('with null', () => {
        expect(ncda()).toBe('');
    });
    test('with null (bis)', () => {
        expect(ncda(null, ['a', 'b'])).toBe('');
    });
    test('with blank', () => {
        expect(ncda('')).toBe('');
    });
    test('with blank (bis)', () => {
        expect(ncda('', ['a', 'b'])).toBe('');
    });
    test('with object', () => {
        expect(ncda({})).toBe('');
    });
    test('with object (bis)', () => {
        expect(ncda({}, ['a', 'b'])).toBe('');
    });
    test('with string #1', () => {
        expect(ncda('12345', '12345')).toBe('1');
    });
    test('with string #2', () => {
        expect(ncda('345', '12345')).toBe('1');
    });
    test('with string #3', () => {
        expect(ncda('121212123', '12345')).toBe('4');
    });
    test('with string but no alphabet', () => {
        expect(ncda('12345')).toBe('');
    });
    test('with string no restricted alphabet', () => {
        expect(ncda('12345', '12')).toBe('1');
    });
    test('with string incompatible alphabet', () => {
        expect(ncda('12345', 'AB')).toBe('A');
    });
    test('with number and no alphabet', () => {
        expect(ncda(12345)).toBe('');
    });
    test('with number and special alphabet', () => {
        expect(ncda(12345, [1, 2, 3, 4, 5])).toBe('');
    });
    test('with number and special alphabet', () => {
        expect(ncda(121212123, [1, 2, 3, 4, 5])).toBe('');
    });
});

describe('checkdigit', () => {
    test('2 calls same result #1', () => {
        const a = checkdigit('123-6RiwJFXE');
        const b = checkdigit('123-6RiwJFXE');
        expect(a).toBe(b);
        expect(a).toBe('E');
    });
    test('2 calls same result #2', () => {
        const a = checkdigit('122-Rp7n7SB5');
        const b = checkdigit('122-Rp7n7SB5');
        expect(a).toBe(b);
        expect(a).toBe('6');
    });
});


describe('parseURI', () => {
    test('with null', () => {
        expect(() => {
            parseURI();
        }).toThrow();
    });
    test('with blank', () => {
        expect(() => {
            parseURI('');
        }).toThrow();
    });
    test('with object', () => {
        expect(() => {
            parseURI({});
        }).toThrow();
    });
    test('with number', () => {
        expect(() => {
            parseURI(1234);
        }).toThrow();
    });
    test('with no slash', () => {
        expect(() => {
            parseURI('uid:XXX-YYYYYYYY-Z');
        }).toThrow();
    });
    test('with unknow scheme', () => {
        expect(() => {
            parseURI('toto:/XXX-YYYYYYYY-Z');
        }).toThrow();
    });
    test('with no scheme', () => {
        expect(() => {
            parseURI('XXX-YYYYYYYY-Z');
        }).toThrow();
    });
    test('with invalid syntax', () => {
        expect(() => {
            parseURI('uid:/XXX');
        }).toThrow();
    });
    test('with invalid checksum', () => {
        expect(() => {
            parseURI('uid:/XXX-YYYYYYYY-Z');
        }).toThrow();
    });
    test('with uri', () => {
        const { batch, identifier, checksum } = parseURI('uid:/123-VfSynF4z-i');
        expect(checksum).toBe('i');
        expect(identifier).toBe('VfSynF4z');
        expect(batch).toBe('123');
    });
    test('with ark', () => {
        const { batch, identifier, checksum } = parseURI('ark:/12345/123-VfSynF4z-i');
        expect(checksum).toBe('i');
        expect(identifier).toBe('VfSynF4z');
        expect(batch).toBe('123');
    });
});
