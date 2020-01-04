/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (a === '0' && b === '0') return '0';
    return sumBinary(a, b);
};

var sumBinary = function (first, second) {
    let aStack = Array.from(first);
    let bStack = Array.from(second);
    let result = '';
    let carry = 0;

    while (aStack.length > 0 || bStack.length > 0) {
        let csum = Number(aStack.pop() || 0)+ Number(bStack.pop() || 0) + carry;

        if (csum > 1) {
            result = (csum - 2).toString() + result;
            carry = 1;
        } else {
            result = csum + result;
            carry = 0;
        }
    }

    if (carry === 1) {
        result = carry + result;
    }
    
    return result;
};
