const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const grid = [];
const visted = [];

rl.on('line', (line) => {
    grid.push(line);
});

rl.on('close', () => {
    let result = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                if(!isVisited(i, j)) {
                    result++;
                    countOffices(grid, i, j);
                }
            }
        }
    }

    console.log(result);
});

function countOffices(arr, row = 0, col = 0) { 
    if (row < 0 || row === arr.length) return;
    if (col < 0 || col === arr[row].length) return;

    if (arr[row][col] === '1') {
        if (!isVisited(row, col)) {
            visted.push([row, col]);
        } else {
            return;
        }

        // right
        countOffices(arr, row, col + 1);

        // left
        countOffices(arr, row, col - 1);

        // up
        countOffices(arr, row - 1, col);

        // down
        countOffices(arr, row + 1, col);
    }
    
    return;
}

function isVisited(row, col) {
    for (let i = 0; i < visted.length; i++) {
        if (visted[i][0] === row && visted[i][1] === col) {
            return true;
        }
    }
    return false;
}
