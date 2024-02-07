function Main(input) {
    input = input.split("\n");
    const [N, T] = input[0].split(" ").map((array, index) => {
        if (index == 0) {
            return Number(array);
        }
        else {
            return BigInt(array);
        }
    })

    const A = input[1].split(" ").map(BigInt);
    let total_seconds = Array(N).fill(0n);
    total_seconds[0] = A[0];
    for (let i = 1; i < N; i++) {
        total_seconds[i] += total_seconds[i - 1] + A[i];
    }
    let mokuhyou = T % total_seconds[total_seconds.length - 1];

    for (let i = 0; i < N; i++) {
        if (mokuhyou <= total_seconds[i]) {
            if (i == 0) {
                console.log(i + 1, mokuhyou.toString());
                return;
            }
            else {
                console.log(i + 1, (mokuhyou - total_seconds[i - 1]).toString())
                return;
            }
        }
    }
    console.log(mokuhyou)
}
Main(`3 500
180 240 120`)