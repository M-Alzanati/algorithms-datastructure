/**
 * @author:
 * @description: test file for testing different cases of binary conversion
 */

const print_binary = require('./index');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('iterative and recursive are functions', () => {
    expect(print_binary.iterative).toBeInstanceOf(Function);
    expect(print_binary.recursive).toBeInstanceOf(Function);
});

describe('iterative implementation', () => {
    test('binary of 0 is 0', () => {
        print_binary.iterative(0);
        expect(console.log.mock.calls[0][0]).toEqual('0');
    });

    test('binary of -1 is 11', () => {
        print_binary.iterative(-1);
        expect(console.log.mock.calls[0][0]).toEqual('11');
    });

    test('binary of 10 is 1010', () => {
        print_binary.iterative(10);
        expect(console.log.mock.calls[0][0]).toEqual('1010');
    });

    test('binary of 54 is 10110100', () => {
        print_binary.iterative(180);
        expect(console.log.mock.calls[0][0]).toEqual('10110100');
    });

    test('binary of -455 is 1111000111', () => {
        print_binary.iterative(-455);
        expect(console.log.mock.calls[0][0]).toEqual('1111000111');
    });

    test('binary of 455 is 111000111', () => {
        print_binary.iterative(455);
        expect(console.log.mock.calls[0][0]).toEqual('111000111');
    });
});

describe('recursive implementation', () => {
    test('binary of 0 is 0', () => {
        print_binary.recursive(0);
        expect(console.log.mock.calls[0][0]).toEqual('0');
    });

    test('binary of -1 is 11', () => {
        print_binary.recursive(-1);
        expect(console.log.mock.calls[0][0]).toEqual('11');
    });

    test('binary of 10 is 1010', () => {
        print_binary.recursive(10);
        expect(console.log.mock.calls[0][0]).toEqual('1010');
    });

    test('binary of 54 is 10110100', () => {
        print_binary.recursive(180);
        expect(console.log.mock.calls[0][0]).toEqual('10110100');
    });

    test('binary of -455 is 1111000111', () => {
        print_binary.recursive(-455);
        expect(console.log.mock.calls[0][0]).toEqual('1111000111');
    });

    test('binary of 455 is 111000111', () => {
        print_binary.recursive(455);
        expect(console.log.mock.calls[0][0]).toEqual('111000111');
    });
});
