/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || matrix.length === 0) return matrix;

    let result = [];
    let length = matrix.length * matrix[0].length;
    let up = 0, down = matrix.length - 1, right = matrix[0].length - 1,  left = 0;

    while(result.length !== length) {
        for (let i = left; i <= right; i++) {
            if (result.length === length) { return result; }
            result.push(matrix[up][i]);
        }
        up += 1;

        for (let i = up; i <= down; i++) {
            if (result.length === length) { return result; }
            result.push(matrix[i][right]);
        }
        right -= 1;

        for (let i = right; i >= left; i--) {
            if (result.length === length) { return result; }
            result.push(matrix[down][i]);
        }
        down -= 1;
        
        for (let i = down; i >= up; i--) {
            if (result.length === length) { return result; }
            result.push(matrix[i][left]);
        }
        left += 1;
    }

    return result;
};


console.log(spiralOrder(
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9,10,11,12]
      ]
));