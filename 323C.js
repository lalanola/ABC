function Main(input) {
    input = input.split("\n");
    const [N, M] = input[0].split(" ").map(Number);
    const A = input[1].split(" ").map(Number);
    const S = input.slice(2).map(inputArray => inputArray.split(""));
    let score = Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (S[i][j] == "o") {
                score[i] += A[j];
            }
        }
        score[i] += i + 1;
    }
    let top = Math.max(...score);

    for (let i = 0; i < N; i++) {
        let need = top - score[i];
        for (let j = 0; j < M; j++) {

        }
    }
}
Main(`7 8
500 500 500 500 500 500 500 500
xxxxxxxx
oxxxxxxx
ooxxxxxx
oooxxxxx
ooooxxxx
oooooxxx
ooooooxx`)