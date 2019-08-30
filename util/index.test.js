const Util = require('./index');

describe('Util', () => {

    it('clones an oject', () => {
        var obj = {
            "test": 1,
            "test1": "This is a test obj"
        }
        expect(Util.clone(obj) === obj).toBe(false);
    });

    it('validates if an element exists in the array', () =>{
        expect(Util.arrayContains(3, [1,5,3])).toBe(true);
        expect(Util.arrayContains(10, [1,5,3])).toBe(false);
        expect(Util.arrayContains("test string", ['str1', 'str1', 'test string'])).toBe(true);
    });

    it('generates a random string of `length`', () => {
        expect(Util.randomString(20).length).toEqual(20);
    });

    it('pushes all elements of an array to a existing array', () => {
        var arr = ['test1'];
        Util.pushAll(arr, ['test2', 'test3']);
        expect(Util.arrayContains('test2', arr)).toBe(true);
        expect(Util.arrayContains('test3', arr)).toBe(true);
    });
});