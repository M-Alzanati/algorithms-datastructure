// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    const arr = new Array(N).fill(0);
    let max = lastMax = 0;
    const counter = N + 1;

    for(let i = 0; i < A.length; i++) {
        const k = A[i] - 1;
        if (A[i] == counter) {
            lastMax = max;
        } else {
            if (arr[k] < lastMax) arr[k] = lastMax;
            arr[k] += 1;
            if (arr[k] > max) max = arr[k];
        }
    }
    
    for (let i = 0; i < N; i++) {
        if (arr[i] < lastMax) {
            arr[i] = lastMax;
        }
    }

    return arr;
}


console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]))