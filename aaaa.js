function Main(input) {
    input = input.split("\n");
    const [N, D, P] = input[0].split(" ").map(Number);
    const F = input[1].split(" ").map(BigInt);
    let f = F;
    f.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
    let i = 0;
    let maisu = 0;
    let tmp_sum = 0n;
    let tmp_count = 0;
    while (i < N - 1) {
        tmp_sum += F[i];
        tmp_count++;
        if (tmp_sum >= P) {
            maisu += tmp_count;
            tmp_count = 0;
            tmp_sum = 0n;
        }
        i++
    }
    let floor = BigInt(customFloor(maisu / D));
    let ceil = BigInt(customCeil(maisu / D));
    let sum1 = 0n;
    let sum2 = 0n;

    for (let i = f.length - 1; i >= floor * BigInt(D); i--) {
        sum1 += f[i];
    }
    sum1 += floor * BigInt(P)
    for (let i = f.length - 1; i >= ceil * BigInt(D); i--) {
        sum2 += f[i];
    }
    sum2 += ceil * BigInt(P);
    if (sum1 < sum2) {
        console.log(sum1.toString());
    }
    else {
        console.log(sum2.toString())
    }
    function customFloor(x) {
        if (x >= 0) {
            return x - (x % 1);
        } else {
            return (x - (x % 1)) - (x % 1 !== 0 ? 1 : 0);
        }
    }
    function customCeil(x) {
        if (x >= 0) {
            return (x % 1 !== 0) ? (x - (x % 1) + 1) : x;
        } else {
            return x - (x % 1);
        }
    }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));