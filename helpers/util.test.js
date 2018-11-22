/* global expect */

const Util = require('./util');

describe('Util', () => {

    it('generates a random string of `length`', () => {
        expect(Util.random_string(20).length).toEqual(20);
    });
    
    it('extracts the extension from the filename', () => {
        expect(Util.get_ext('Tiara.jpg')).toEqual('jpg');
        expect(Util.get_ext('test.png')).toEqual('png');
    })
});
