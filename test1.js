const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;
let Q;
let A;
let B;
const INF = 1e18;
let ans = 0;

// 標準入力からデータを読み取り
rl.question('N: ', (n) => {
    N = parseInt(n);
    rl.question('Q: ', (qInput) => {
        Q = qInput.split(' ').map(Number);
        rl.question('A: ', (aInput) => {
            A = aInput.split(' ').map(Number);
            rl.question('B: ', (bInput) => {
                B = bInput.split(' ').map(Number);
                rl.close();

                for (let x = 0; x <= Math.max(...Q); x++) {
                    let y = INF;
                    for (let i = 0; i < N; i++) {
                        if (Q[i] < A[i] * x) {
                            y = -INF;
                        } else if (B[i] > 0) {
                            y = Math.min(y, Math.floor((Q[i] - A[i] * x) / B[i]));
                        }
                    }
                    ans = Math.max(ans, x + y);
                }
                console.log(ans);
            });
        });
    });
});
