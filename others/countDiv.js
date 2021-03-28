function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;

    for (let i = A; i <= B; i++) {
        if (count > 0) {
            const a = Math.floor(((B - i) / K));
            const b = B % K === 0 ? 1 : 0;
            return a + b +count;
        }
        
        if (i % K === 0) count += 1;
    }

    return count;
}

console.log(solution(6,12,2));
