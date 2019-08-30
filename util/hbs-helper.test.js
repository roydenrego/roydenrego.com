/* global expect */

const helper = require('./hbs-helper').helpers;


describe('Helpers', () => {

    it('return a date string in specified format', () => {
        expect(helper.printDate("2018-11-20 11:00:00",1)).toEqual(20);
        expect(helper.printDate("2018-11-20 11:00:00",2)).toEqual('Nov');    
        expect(helper.printDate("2018-11-20 11:00:00",3)).toEqual(2018);    
    });
    
    it('returns a json string equivalent of a object', () => {
        expect(helper.printJson({test: 7})).toEqual(JSON.stringify({test: 7}));
    });
    
    it('validates if a string is equal to anohter', () => {
        expect(helper.stringEquals("Hello World!", "Hello World!")).toBe(true);
    });
    
    it('invalidates if a string is not equal to anohter', () => {
       expect(helper.stringEquals("Bye World.", "Beq W4rff!")).toBe(false); 
    });
    
    it('returns a wow delay appropriate to the `index`', () => {
        expect(helper.wowDelay(0)).toEqual(1.2);
        expect(helper.wowDelay(1)).toEqual(1.3);
        expect(helper.wowDelay(10)).toEqual(2.2);
    });
    
    it('returns a date string', () => {
       expect(helper.printFullDate("2018-11-20 11:00:00")).toEqual("20/11/2018 11:00:00");
       expect(helper.printFullDate("2018-11-20 20:32:01")).toEqual("20/11/2018 20:32:01");
    });
    
    it('returns a incremented count of variable', () => {
       expect(helper.counter(0)).toEqual(1);
       expect(helper.counter(5)).toEqual(6);
       expect(helper.counter(28132)).toEqual(28133);
    });
});
