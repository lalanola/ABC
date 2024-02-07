function Main(input) {
    input = input.split("\n");
    const [H, W] = input[0].split(" ").map(Number);
    let S = input.slice(1).map(str => str.split(""));
    for (let i = 0; i < H; i++) {
        let renzokuT = 0;
        for (let j = 0; j < W; j++) {
            if (renzokuT == 0) {
                if (S[i][j] == "T") {
                    renzokuT++;
                }
            }
            else {
                if (S[i][j] == "T") {
                    renzokuT++;
                }
                else {
                    renzokuT = 0;
                }
            }

            if (renzokuT == 2) {
                S[i][j - 1] = "P";
                S[i][j] = "C";
                renzokuT = 0;
            }
        }
    }
    console.log(S.map(row => row.join("")).join("\n"));
}

Main(`3 5
T.T.T
.TTT.
TTTTT`)