function Main(input) {
    input = input.split("\n");
    const [N, M] = input[0].split(" ").map(Number);
    const A = input[1].split(" ").map(BigInt).map((element, index) => [index, element, "A"])
    const B = input[2].split(" ").map(BigInt).map((element, index) => [index, element, "B"])
    let AB = [...A, ...B]
    AB.sort((a, b) => (a[1] > b[1]) ? 1 : (a[1] < b[1]) ? -1 : 0)
    let a_index = 0;
    let b_index = 0;
    let ab_a = [];
    let ab_b = []
    for (let i = 0; i < N + M; i++) {
        if (AB[i][2] == "A") {
            if (AB[i][0] == a_index) {
                ab_a.push(i + 1)
                a_index++
            }
        }
        if (AB[i][2] == "B") {
            if (AB[i][0] == b_index) {
                ab_b.push(i + 1);
                b_index++
            }
        }
    }
    console.log(ab_a.join(" "));
    console.log(ab_b.join(" "))
}
Main(`8 12
3 4 10 15 17 18 22 30
5 7 11 13 14 16 19 21 23 24 27 28`)