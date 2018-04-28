/**
 * @author:
 * @description:
 */

const palindrome = require('./index');

test('check if functions are defined', () => {
    expect(palindrome.recursive).toBeInstanceOf(Function);
    expect(palindrome.iterative).toBeInstanceOf(Function);
});

describe('test using iterative solution', () => {
    test('\'Never odd or even\' is plaindrome', () => {
        expect(palindrome.iterative('Amore Roma')).toBeTruthy();
    });

    test('\'Some men interpret nine memos\' is plaindrome', () => {
        expect(palindrome.iterative('Some men interpret nine memos')).toBeTruthy();
    });

    test('\'Some men interpret nine memose\' is not plaindrome', () => {
        expect(palindrome.iterative('Some men interpret nine memose')).toBeFalsy();
    });

    test('\'Gateman sees name, garageman sees nametag\' is plaindrome', () => {
        expect(palindrome.iterative('Gateman sees name, garageman sees nametag')).toBeTruthy();
    });

    test('1234321 is plaindrome', () => {
        expect(palindrome.recursive('1234321')).toBeTruthy();
    });
});

describe('test using recursive solution', () => {
    test('\'Never odd or even\' is plaindrome', () => {
        expect(palindrome.recursive('Amore Roma')).toBeTruthy();
    });

    test('\'Some men interpret nine memos\' is plaindrome', () => {
        expect(palindrome.recursive('Some men interpret nine memos')).toBeTruthy();
    });

    test('\'Some men interpret nine memose\' is not plaindrome', () => {
        expect(palindrome.recursive('Some men interpret nine memose')).toBeFalsy();
    });

    test('\'Gateman sees name, garageman sees nametag\' is plaindrome', () => {
        expect(palindrome.recursive('Gateman sees name, garageman sees nametag')).toBeTruthy();
    });

    test('1234321 is plaindrome', () => {
        expect(palindrome.recursive('1234321')).toBeTruthy();
    });
});