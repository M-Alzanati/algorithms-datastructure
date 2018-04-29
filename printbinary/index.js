/**
 * @author:
 * @description: print binary representation of a number using iterative and recursive solution.
 * @example: (10) = 1010
 */

function recursive(n, fn, result = '') {
    if(n === 0) {
        fn('0');
        return;
    }

    if (Math.sign(n) * n < 1) {
        if (Math.sign(n) < 0) {
            result = '1' + result;
        }
        fn(result);
        return;
    } else {
        const mod = parseInt((Math.sign(n) * n) % 2);
        result = mod + result;
        recursive(n / 2, fn, result);
    }
}

function iterative(n, fn) {
    if(n === 0) {
        fn('0');
        return;
    }

    let result = '';
    let sign = Math.sign(n);
    n = sign * n;
      
    for(let i = n; i >= 1; i /= 2) {
        const mod = parseInt(i % 2);
        result = mod + result;
    }

    if(sign < 0) {
        result = '1' + result;
    }

    fn(result);
}

module.exports = {
    recursive,
    iterative
}