function Main(input) {
    input = input.split("\n");
    const [N, M] = input[0].split(" ").map(Number);
    let C = [];
    let a = [];
    for (let i = 0; i < 2 * M; i += 2) {
        C.push(Number(input[i + 1]));
        a.push(input[i + 2].split(" ").map(Number))
    }
    console.log(C);
    console.log(a)
}
Main(`3 3
2
1 2
2
1 3
1
2`)