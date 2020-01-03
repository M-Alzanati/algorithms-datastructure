/**
 * 
 * @param {bracket string} str 
 */
function isBalanced(str) {
    if (str.length < 2) return 'NO';
    const arr = [str[0]];

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
            if (!hasMatchingPair(arr.pop(), str[i])) {
                return 'NO';
            }
        } else {
            if (str[i] !== undefined) arr.push(str[i]);
        }
    }

    return arr.length !== 0 ? 'NO' : 'YES';
}

function hasMatchingPair(s, c) {
    if (s === '{' && c === '}') return true;
    if (s === '[' && c === ']') return true;
    if (s === '(' && c === ')') return true;
    return false;
}
