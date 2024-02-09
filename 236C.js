function Main(input) {
    input = input.split("\n");
    const [N, M] = input[0].split(" ").map(Number);
    const S = input[1].split(" ");
    const T = input[2].split(" ");

    let T_set = new Set();
    for (let i = 0; i < M; i++) {
        T_set.add(T[i]);
    }
    for (let i = 0; i < N; i++) {
        if (T_set.has(S[i])) {
            console.log("Yes");
        }
        else{
            console.log("No");
        }
    }
}
Main(`7 7
a t c o d e r
a t c o d e r`)