function Main(input) {
    input = input.split("\n");
    const S = input[0].trim() + " ";
    const T = input[1].trim();

    for (let i = 0; i < S.length; i++) {
        if (S[i] != T[i]) {
            console.log(i + 1);
            return
        }
    }
}
Main(`atcoder
atcodera`)