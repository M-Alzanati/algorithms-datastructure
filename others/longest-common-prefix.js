/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || strs.length === 0) return '';

    let n = strs[0].length;
    for (let str of strs) {
        n = Math.min(str.length, n);
    }

    let result = '';
    for (let j = 0; j < n; j++) {
        let last = strs[0][j];
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][j] !== last) return result;
            else last = strs[i][j];
        }
        
        result += last;  
    }

    return result;
};
