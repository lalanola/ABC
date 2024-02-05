const Q = [800, 100];
const A = [100, 100];
const B = [200, 10];
const N = 2;
let ans = 0;
const INF = 1e18;
for (let x = 0; x <= Math.max(...Q); x++) {
    let y = INF;
    for (let i = 0; i < N; i++) {
        if (Q[i] < A[i]) {
            y = -INF;
        }
        else if (B[i] > 0) {
            y = Math.min(y, Math.floor((Q[i] - A[i] * x) / B[i]));
        }
    }
    ans = Math.max(ans, x + y);
}