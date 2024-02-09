function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    const S = input.slice(1);
    let map = new Map();
    for (let i = 0; i < N; i++) {
        if (map.has(S[i])) {
            map.set(S[i], map.get(S[i]) + 1);
        }
        else {
            map.set(S[i], 1);
        }
        if (map.get(S[i]) == 1) {
            console.log(S[i]);
        }
        else {
            console.log(S[i] + "(" + (map.get(S[i]) - 1) + ")")
        }
    }
}
Main(`11
a
a
a
a
a
a
a
a
a
a
a`)