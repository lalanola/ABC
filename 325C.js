function Main(input) {
    input = input.split("\n");
    const [H, W] = input[0].split(" ").map(Number);
    const S = input.slice(1);
    let visited = Array(H).fill().map(() => Array(W).fill(false));
    let sum = 0;

    console.log(input)

    function dfs(h, w) {

        if (h < 0 || w < 0 || h >= H || w >= W || visited[h][w] || S[h][w] == ".") {
            return;
        }
        visited[h][w] = true;
        const direct = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

        for (let i = 0; i < direct.length; i++) {
            let [new_h, new_w] = direct[i];
            dfs(new_h + h, new_w + w);
        }

    }



    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (S[i][j] == "#" && visited[i][j] == false) {
                dfs(i, j);
                sum++
            }
        }
    }
    console.log(sum);
}

Main(`5 47
.#..#..#####..#...#..#####..#...#...###...#####
.#.#...#.......#.#...#......##..#..#...#..#....
.##....#####....#....#####..#.#.#..#......#####
.#.#...#........#....#......#..##..#...#..#....
.#..#..#####....#....#####..#...#...###...#####
`)