function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    const FS = input.slice(1).map(inputArray => inputArray.split(" ")).map(inputArray => {
        return [Number(inputArray[0]), BigInt(inputArray[1])]
    });
    const f = 0;
    const s = 1;

    let a = Array(N).fill().map(a => []);
    for (let i = 0; i < N; i++) {
        a[FS[i][f] - 1].push(FS[i][s]);
    }
    let ans = 0n;
    for (let i = 0; i < N; i++) {//味が同じの場合
        if (a[i].length < 2) {
            continue;
        }
        a[i].sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
        let now = a[i][0] + a[i][1] / 2n;
        if (ans < now) {
            ans = now;
        }
    }
    let b = [];
    for (let i = 0; i < N; i++) {
        if (a[i].length == 0) {
            continue;
        }
        b.push(a[i][0]);
    }
    b.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
    if (b.length >= 2) {
        if (b[0] + b[1] > ans) {
            ans = b[0] + b[1]
        }
    }
    console.log(ans.toString())
}
Main(`4
4 10
3 2
2 4
4 12`);
