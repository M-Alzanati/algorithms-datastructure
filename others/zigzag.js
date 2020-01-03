const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var findDiagonalOrder = function (matrix) {
    if (!matrix || matrix.length <= 0) return matrix;

    let lines = matrix.length + matrix[0].length - 1;
    let isUp = true;
    let i = 0,
        j = 0;
    let res = [];

    for (let n = 0; n < lines; n++) {
        if (isUp) {
            if (j < 0) j = 0;

            while (i >= 0) {
                res.push(matrix[i][j]);
                if (j + 1 === matrix[0].length) {
                    i += 1;
                    break;
                } else {
                    i = i - 1;
                    j = j + 1;
                }
            }
        } else {
            if (i < 0) i = 0;

            while (j >= 0) {
                res.push(matrix[i][j]);
                if (i + 1 === matrix.length) {
                    j += 1;
                    break;
                } else {
                    j = j - 1;
                    i = i + 1;
                }
            }
        }
        isUp = !isUp;
    }

    return res;
};

var res = findDiagonalOrder(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);

console.log(res);