/**
 * @author: Mohamed Hosny Ahmed
 * @description: Given a word check to see if it's palindrom or not, Using recursion and loops
 * @example: ["Rise to vote sir", aibohphobia] are palindroms
 */

function recursive(x, y) {
    if (y === 0) {
        return 1;
    } else if (y === 1) {
        return x;
    } else {
        return x * recursive(x, y - 1);
    }
}

function iterative(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

module.exports = {
    recursive,
    iterative
};