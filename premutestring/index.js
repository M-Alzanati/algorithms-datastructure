/**
 * @author:
 * @description: given a string s premute it to all possible cases
 */

function premuteWithDuplicationHelper(arr = [], length = 0, prefix = []) {
    if (prefix.length === length) {
        console.log(prefix.join(''));
    } else {
        for (let i = 0; i < arr.length; i++) {
            // choose
            const chr = arr[i];
            prefix.push(chr);

            // explore
            premuteWithDuplicationHelper(arr, length, prefix);

            // un-choose
            prefix.pop();
        }
    }
}

function premuteWithDuplications(string) {
    premuteWithDuplicationHelper(string.split(''), string.length);
}

function premuteWithoutDuplicationHelper(arr = [], prefix = []) {
    if (arr.length === 0) {
        console.log(prefix.join(''));
    } else {
        for (let i = 0; i < arr.length; i++) {
            // choose
            const chr = arr[i];
            prefix.push(chr);
            arr.splice(i, 1);

            // explore
            premuteWithoutDuplicationHelper(arr, prefix);

            // un-choose
            prefix.pop();
            arr.splice(i, 0, chr);
        }
    }
}

function premuteWithoutDuplications(string) {
    premuteWithoutDuplicationHelper(string.split(''));
}

module.exports = {
    premuteWithoutDuplications,
    premuteWithDuplications
};