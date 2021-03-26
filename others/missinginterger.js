/*
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.
*/

function solution(A) {
    let min = 1;
    const max = Math.max(...A);
    if (max < 0) return min;

    const arr = {};
    for (let i = 0; i < A.length; i++) {
        arr[A[i]] = A[i];
    }

    for (let i = 1; i < max; i++) {
        if (arr[i]) continue;
        return i;
    }

    return max + 1;
}


console.log(solution([-1, -2]));