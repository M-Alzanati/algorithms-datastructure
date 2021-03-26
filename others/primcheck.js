/*
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.
Given an array A, returns 1 if array A is a permutation and 0 if it is not.

*/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = {};
    const max = Math.max(...A);

    for (let a of A) {
        if (arr[a]) {
            return 0;
        } else {
            arr[a] = 1;
        }
    }

    for (let i = 1; i < max; i++) {
        if (!arr[i]) return 0;
    }

    return 1;
}