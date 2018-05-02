/**
 * @author:
 * @description: Write a recursive function diceroll that
 *               accept an integer representing a number of 6-sided dice to roll,
 *               print all possible combinations of values that could appear on the dice
 */

function roll(dices, chosen = []) {
    if (dices === 0) {
        console.log(chosen.toString());
    } else {
        for (let i = 1; i <= 6; i++) {
            chosen.push(i);

            roll(dices - 1, chosen);

            chosen.pop();
        }
    }
}

module.exports = roll;