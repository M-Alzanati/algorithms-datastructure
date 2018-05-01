/**
 * @author:
 * @description:
 */

const print_sequence = require('./index');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('is printbinary a fucntion', () => {
    expect(typeof (print_sequence.printbinary)).toBe('function');
});

test('is printdecimal a fucntion', () => {
    expect(typeof (print_sequence.printdecimal)).toBe('function');
});

describe('printbinary function', () => {
    test('printbinary(2)\n0 0\n0 1\n1 0\n1 1', () => {
        print_sequence.printbinary(2);
        expect(console.log.mock.calls[0][0]).toEqual('0 0');
        expect(console.log.mock.calls[1][0]).toEqual('0 1');
        expect(console.log.mock.calls[2][0]).toEqual('1 0');
        expect(console.log.mock.calls[3][0]).toEqual('1 1');
    });
    
    test('printbinary(3)\n0 0 0\n0 0 1\n0 1 0\n0 1 1\n1 0 0\n1 0 1\n1 1 0\n1 1 1', () => {
        print_sequence.printbinary(3);
        expect(console.log.mock.calls[0][0]).toEqual('0 0 0');
        expect(console.log.mock.calls[1][0]).toEqual('0 0 1');
        expect(console.log.mock.calls[2][0]).toEqual('0 1 0');
        expect(console.log.mock.calls[3][0]).toEqual('0 1 1');
        expect(console.log.mock.calls[4][0]).toEqual('1 0 0');
        expect(console.log.mock.calls[5][0]).toEqual('1 0 1');
        expect(console.log.mock.calls[6][0]).toEqual('1 1 0');
        expect(console.log.mock.calls[7][0]).toEqual('1 1 1');
    });
});

describe('printdecimal function', () => {
    test('printdecimal(3)', () => {
        print_sequence.printdecimal(1);
        expect(console.log.mock.calls[0][0]).toEqual('0');
        expect(console.log.mock.calls[1][0]).toEqual('1');
        expect(console.log.mock.calls[2][0]).toEqual('2');
        expect(console.log.mock.calls[3][0]).toEqual('3');
        expect(console.log.mock.calls[4][0]).toEqual('4');
        expect(console.log.mock.calls[5][0]).toEqual('5');
        expect(console.log.mock.calls[6][0]).toEqual('6');
        expect(console.log.mock.calls[7][0]).toEqual('7');
        expect(console.log.mock.calls[8][0]).toEqual('8');
        expect(console.log.mock.calls[9][0]).toEqual('9');
    });
});