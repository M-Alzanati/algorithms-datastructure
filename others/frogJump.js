/*
A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.
*/

function solution(X, A) {
    let sum = 0;
    
    for (let i = 1; i <= X; i++) {
        sum += i;
    }

    const map = {};
    for (let i = 0; i < A.length; i++) {
        const t = map[A[i]];
        if (!t) {
        	map[A[i]] = A[i];
        	sum -= A[i];
        	if (sum === 0) return i;
        } 
    }

    return -1; 
}

console.log(solution(10, [10, 2, 1, 4, 7, 3, 5, 9, 8, 6, 8, 5, 3]))

