function Main(input) {
    input = input.split("\n");
    const [N, M] = input[0].split(" ").map(Number);
    const S = input[1].trim();
    const C = input[2].split(" ").map(Number);

    for (let i = 1; i <= M; i++) {
        let ps = [];
        for (let j = 0; j < N; j++) {
            if (C[j] == i) {
                ps.push(S[j]);
            }
        }
        //右に巡回シフト
    }
}

Main(input);