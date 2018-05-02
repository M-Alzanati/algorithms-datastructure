/**
 * @author:
 * @description:
 */

const dicesum = require('./index');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('is dicesum a function', () => {
    expect(dicesum.dicesum).toBeInstanceOf(Function);
});

test('testing dicesum(2, 5)', () => {
    dicesum.dicesum(2, 5);
    expect(console.log.mock.calls[0][0]).toEqual('1,4');
    expect(console.log.mock.calls[1][0]).toEqual('2,3');
    expect(console.log.mock.calls[2][0]).toEqual('3,2');
    expect(console.log.mock.calls[3][0]).toEqual('4,1');
    console.log('calls', dicesum.getcalls());
});

test('testing dicesum(5, 5)', () => {
    dicesum.dicesum(5, 5);
    expect(console.log.mock.calls[0][0]).toEqual('1,1,1,1,1');
    console.log('calls', dicesum.getcalls());
});