// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = new Array(N).fill(0);
    let max = 0;
    let lastMax = 0;
    
    for(let i = 0; i < A.length; i++) {
        if (A[i] >= 1 && A[i] <= N) {
            arr[A[i] - 1] += 1;
            if (arr[A[i] - 1] > max) {
                max = arr[A[i] - 1];
            }
        } else {
            arr = arr.map(r => max);
        }
    }
    return arr;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]))