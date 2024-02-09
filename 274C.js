function Main(input) {
    input = input.split("\n");
    const N = Number(input[0])
    const A = [0, ...input[1].split(" ").map(Number)];

    let array = Array(2 * N + 2).fill(0);
    for (let i = 1; i <= N; i++) {
        array[i * 2] = array[A[i]] + 1;
        array[i * 2 + 1] = array[A[i]] + 1;
    }
    console.log(array.slice(1).join("\n"))
}
Main(`4
1 3 5 2`)