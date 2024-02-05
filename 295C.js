function Main(input) {
    input = input.split("\n");
    const N = Number(input[0])
    const A = input[1].split(" ").map(BigInt).sort();
    let onaji = 1;
    let sum = 0;
    for (let i = 1; i < N; i++) {
        if (A[i] != A[i - 1]) {
            sum += Math.floor(onaji / 2);
            onaji = 1;
        }
        else {
            onaji++;
        }
    }
    sum += Math.floor(onaji / 2);
    console.log(sum)

}
Main(`10
295 2 29 295 29 2 29 295 2 29`)