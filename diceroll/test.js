/**
 * @author:
 * @description:
 */

const diceroll = require('./index');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('is diceroll a function', () => {
    expect(diceroll).toBeInstanceOf(Function);
});

test('testing diceroll(2) using 2 loops', () => {
    diceroll(2);

    let counter = 0;
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
            expect(console.log.mock.calls[counter++][0]).toEqual(i + ',' + j);
        }
    }
});

test('testing diceroll(3) using 3 loops', () => {
    diceroll(3);

    let counter = 0;
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
            for (let k = 1; k <= 6; k++) {
                expect(console.log.mock.calls[counter++][0]).toEqual(i + ',' + j + ',' + k);
            }
        }
    }
});