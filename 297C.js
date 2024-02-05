function Main(input) {
    input = input.split("\n");
    const [H, W] = input[0].split(" ").map(Number);
    let S = input.slice(1);
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W - 1; j++) {
            if (S[i][j] == "T" && S[i][j + 1] == "T") {
                S[i][j] = "P";
                S[i][j + 1] = "C";
            }
        }
    }
    console.log(S)
}

Main(`3 5
TTT..
.TTT.
TTTTT`)