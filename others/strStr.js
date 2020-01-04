/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle || needle === '') return 0;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let flag = true;

            for (let j = 1; j < needle.length; j++) {
                if (!haystack[i + j]) return -1;
                if (needle[j] !== haystack[i + j]) flag = false;
            }

            if (flag) return i;
        }
    }

    return -1;
};

console.log(strStr('aaagaa', 'ga'));