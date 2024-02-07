function Main(input) {
    input = input.split("\n");
    const N = Number(input[0])
    const A = input[1].split(" ").map(BigInt);
    let gusu = [];
    let kisu = [];
    for (let i = 0; i < N; i++) {
        if (A[i] % 2n == 0) {
            gusu.push(A[i]);
        }
        else {
            kisu.push(A[i]);
        }
    }
    gusu.sort((a, b) => {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    })
    kisu.sort((a, b) => {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    })
    if (gusu.length < 2 && kisu.length < 2) {
        console.log(-1);
        return;
    }
    let max = 0n;
    if (gusu.length >= 2) {
        if (max < gusu[0] + gusu[1]) {
            max = gusu[0] + gusu[1];
        }
    }
    if (kisu.length >= 2) {
        if (max < kisu[0] + kisu[1]) {
            max = kisu[0] + kisu[1];
        }
    }
    console.log(max.toString());

}
Main(`3
2 3 4`)