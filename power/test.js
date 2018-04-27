/**
 * @author: Mohamed Hosny Ahmed
 * @description: Test recursive and iterative solution of power function implementation
 */

const power = require('./index');

test('check both implementations defined as function', () => {
    expect(power.recursive).toBeInstanceOf(Function);
    expect(power.iterative).toBeInstanceOf(Function);
});

describe('test with negative numbers', () => {
    test('power(-1, 2) equals = 1', () => {
        expect(power.recursive(-1, 2)).toBe(1);
        expect(power.iterative(-1, 2)).toBe(1);
    });

    test('power(-5, 3) equals = -125', () => {
        expect(power.recursive(-5, 3)).toBe(-125);
        expect(power.iterative(-5, 3)).toBe(-125);
    });
});

describe('test edge cases', () => {
    test('power(1, 0) equals = 1', () => {
        expect(power.recursive(1, 0)).toBe(1);
        expect(power.iterative(1, 0)).toBe(1);
    });

    test('power(0, 0) equals = 1', () => {
        expect(power.recursive(0, 0)).toBe(1);
        expect(power.iterative(0, 0)).toBe(1);
    });
});

describe('test all other cases', () => {
    test('power(2, 3) equals to 8', () => {
        expect(power.recursive(2, 3)).toBe(8);
        expect(power.iterative(2, 3)).toBe(8);
    });

    test('power(4, 5) equals to 1024', () => {
        expect(power.recursive(4, 5)).toBe(1024);
        expect(power.iterative(4, 5)).toBe(1024);
    });

    test('power(8, 10) equals to 1073741824', () => {
        expect(power.recursive(8, 10)).toBe(1073741824);
        expect(power.iterative(8, 10)).toBe(1073741824);
    });
});