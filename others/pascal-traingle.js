/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (!numRows || numRows === 0) return [];
    if (numRows === 1) return [
        [1]
    ];
    if (numRows === 2) return [
        [1],
        [1, 1]
    ];

    let result = [[1], [1, 1]];
    for (let n = 3; n <= numRows; n++) {

        let current = [];
        let last = initArr(result[result.length - 1]);

        for (let j = 0; j < last.length; j++) {
            if (j + 1 >= last.length) {
                break;
            }
            current.push(last[j] + last[j + 1]);
        }

        result.push(current);
    }

    return result;
};

var initArr = function (arr) {
    let result = [0];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

    result.push(0);
    return result;
};
