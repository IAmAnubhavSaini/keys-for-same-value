const {getAllKeys} = require('./index');

describe('get all keys for value in object', () => {
    it('gets all exptected keys successfully', () => {
        const value = 'faf';
        const object = {
            'f': 'faf',
            'fa': 'faf',
            'faf': 'faf',
            'fafa': 'fafa'
        };
        const actual = getAllKeys(value, object);
        const expected = ['f', 'fa', 'faf'];
        expect(actual.length).toBe(expected.length);
        for (let i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
    it('gets all exptected keys successfully with recursion', () => {
        const value = 'faf';
        const object = {
            f: 'faf',
            fa: 'faf',
            faf: 'faf',
            fafa: {
                x: 'faf', y: 'fa', z: 'faf'
            },
            arr: ['faf', 'fuf', 'funf']
        };
        const actual = getAllKeys(value, object);
        const expected = ['f', 'fa', 'faf', 'x', 'z', '0'];
        expect(actual.length).toBe(expected.length);
        for (let i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
