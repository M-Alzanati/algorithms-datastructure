/**
 * @author: Mohamed Hosny Ahmed
 * @description: Use the iterative and recursive to calculate the y power of x.
 * @example: power(2, 3) = 8
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
