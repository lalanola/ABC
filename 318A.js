function Main(input) {
    input = input.split("\n");
    const [N, M, P] = input[0].split(" ").map(Number);
    function customFloor(x, m) {
        let r = (x % m + m) % m;
        return (x - r) / m;
    }
    let Answer = customFloor((N - M + P), P)
    console.log(Answer);
}
Main(`200000 314 318
`)