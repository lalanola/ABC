function Main(input) {
    input = input.split("\n");
    const [N, D] = input[0].split(" ").map(Number);
    const xy = input.slice(1).map(inputArray => inputArray.split(" ").map(Number));
    let kansen = Array(N).fill(false);
    kansen[0] = true;
    let tansaku = [];
    const x = 0;
    const y = 1;
    for (let i = 0; i < N; i++) {
        if (kansen[i] == true) {
            for (let j = 0; j < N; j++) {
                if (Math.sqrt((xy[j][x] - xy[i][x]) * (xy[j][x] - xy[i][x]) + (xy[j][y] - xy[i][y]) * (xy[j][y] - xy[i][y])) <= D) {
                    kansen[j] = true;
                }
            }
        }
    }

    console.log(kansen);
}

Main(`9 4
3 2
6 -1
1 6
6 5
-2 -3
5 3
2 -3
2 1
2 6`)