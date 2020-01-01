'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the contacts function below.
 */
function contacts(queries) {
    if (queries.length === 1) return [0];

    const arr = [];
    const result = [];

    for (const qry of queries) {
        if (qry[0] === 'add') {
            arr.push(qry[1]);
        }
        else if (qry[0] === 'find') {
            result.push(0);

            for (let str of arr) {
                if (str.startsWith(qry[1])) {
                    result[result.length - 1]++;
                }
            }
        }
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const queriesRows = parseInt(readLine(), 10);

    let queries = Array(queriesRows);

    for (let queriesRowItr = 0; queriesRowItr < queriesRows; queriesRowItr++) {
        queries[queriesRowItr] = readLine().split(' ');
    }

    let result = contacts(queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
