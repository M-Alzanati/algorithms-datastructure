/**
 * @author:
 * @description: given a string s premute it to all possible cases
 */

const premutestring = require('./index');

test('is premutestring a function', () => {
    expect(premutestring.premuteWithDuplications).toBeInstanceOf(Function);
    expect(premutestring.premuteWithoutDuplications).toBeInstanceOf(Function);
});

test('premute string marty with duplications', () => {
    premutestring.premuteWithDuplications('abc');
});

test('premute string marty without duplications', () => {
    premutestring.premuteWithoutDuplications('abc');
});