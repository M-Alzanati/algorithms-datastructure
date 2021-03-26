/*
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
*/
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