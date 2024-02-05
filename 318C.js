const { copyFileSync } = require("fs");

function Main(input) {
    input = input.split("\n");
    const [N, D, P] = input[0].split(" ").map(Number);
    const F = input[1].split(" ").map(BigInt);
    let f = F;
    let s = Array(N + 1).fill(0n);
    f.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);

    for (let i = 0; i < N; i++) {
        s[i + 1] = s[i] + f[i];
    }

    let ans = 0;

    for (let i = 0; i < 1e9; i++) {
        let r = Math.max(0, N - i * D);
        let now = s[r] + BigInt(P * i);
        if (now < ans) {
            ans = now;
        }
        if (r == 0) {
            break;
        }
    }

    console.log(ans)

}
Main(`5 2 10
7 1 6 3 6
`);

//1000000000
//1000000000 