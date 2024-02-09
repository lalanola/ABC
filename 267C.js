function Main(input) {
    input = input.split("\n");
    const [N, M] = input[0].split(" ").map(Number);
    const A = input[1].split(" ").map(Number);
    let max = 0;
    let sum = 0;
    for (let i = 0; i < M; i++) {
        sum += A[i] * (i + 1);
    }
    max = sum;
    let ruiseki = Array(N + 1).fill(0);
    for (let i = 0; i < N; i++) {
        ruiseki[i + 1] = ruiseki[i] + A[i];
    }
    let r = M - 1;
    let l = 0;

    while (r < N - 1) {
        sum = sum - (ruiseki[r + 1] - ruiseki[l + 1]) - (ruiseki[l + 1] - ruiseki[l]) + A[r + 1] * M;
        if (max < sum) {
            max = sum;
        }
        l++;
        r++;
    }
    console.log(max)
}
Main(`10 4
-3 1 -4 1 -5 9 -2 6 -5 3`)