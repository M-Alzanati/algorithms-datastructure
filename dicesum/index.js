/**
 * @author:
 * @description: Write a recursive function dicesum that
 *               accept number of 6-sided dices and a sum,
 *               print all possible combinations of values that can get that sum
 */

let calls = 0;
let actualCalls = 0;

function sumHelper(dices, sum, sumSoFar = 0, chosen = []) {
    if (dices === 0) {
        console.log(chosen.toString());
        actualCalls++;
    } else {
        for (let i = 1; i <= 6; i++) {
            if (sumSoFar + i + 1 * (dices - 1) <= sum &&
                sumSoFar + i + 6 * (dices - 1) >= sum) {

                chosen.push(i);

                sumHelper(dices - 1, sum, sumSoFar + i, chosen);

                chosen.pop();
            }
        }
    }
    calls++;
}

function dicesum(dices, sum) {
    sumHelper(dices, sum);
}

function getcalls() {
    return {
        calls,
        actualCalls
    };
}

module.exports = {
    dicesum,
    getcalls
};