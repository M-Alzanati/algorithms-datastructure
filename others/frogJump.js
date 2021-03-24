// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
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

