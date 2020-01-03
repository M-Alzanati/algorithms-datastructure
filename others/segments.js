const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stdin_input = [];

rl.on('line', (line) => {
    stdin_input.push(line);
});

rl.on('close', () => {
    let T = parseInt(stdin_input[0]);

    for(let k = 0, index = 1; k < T; k++, index += 2) {
        let arr = stdin_input[index + 1].split(' ').map((v) => parseInt(v));
        // count segments
        let count = 0, slice = 3;
        for(let i = 0; i < arr.length; i++) {
            // has beautiful segment
            if ((i + slice) > arr.length) break;

            if (hasBeautiful(arr.slice(i, i + slice))) {
                count++;
            }
        }

        console.log(count);
    }
});

function hasBeautiful(arr) {
    let mid = parseInt(arr.length / 2);

    for (let i = 0; i < mid; i++) {
        if (arr[i] > arr[mid]) return false;
    }

    for (let i = mid + 1; i < arr.length; i++) {
        if (arr[i] > arr[mid]) return false;
    }

    console.log(arr, `arr[${mid}] = ${arr[mid]}`);
    return true;
}
