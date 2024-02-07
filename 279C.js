function Main(input) {
    input = input.split("\n");
    const [H, W] = input[0].split(" ").map(Number);
    const S = input.slice(1, H + 1);
    const T = input.slice(H + 1, 2 * H + 1)

    let S_H_sharp = Array(W).fill(0);
    let T_H_sharp = Array(W).fill(0);
    let S_W_sharp = Array(H).fill(0);
    let T_W_sharp = Array(H).fill(0);
    for (let i = 0; i < W; i++) {
        for (let j = 0; j < H; j++) {
            if (S[j][i] == "#") {
                S_H_sharp[i]++;
            }
            if (T[j][i] == "#") {
                T_H_sharp[i]++;
            }
        }
    }
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (S[i][j] == "#") {
                S_W_sharp[i]++;
            }
            if (T[i][j] == "#") {
                T_W_sharp[i]++;
            }
        }
    }
    S_H_sharp.sort();
    T_H_sharp.sort();
    S_W_sharp.sort();
    T_W_sharp.sort();
    if (S_H_sharp.join("") == T_H_sharp.join("") && S_W_sharp.join("") == T_W_sharp.join("")) {
        console.log("Yes");
    }
    else {
        console.log("No")
    }
}

Main(`2 1
.
#
#
.
`)