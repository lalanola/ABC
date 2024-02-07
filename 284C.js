function Main(input) {
    input = input.split("\n");
    const [N, M] = input[0].split(" ").map(Number);
    const uv = input.slice(1).map(array => array.split(" ").map(Number));
    const u = 0;
    const v = 1;
    let v1 = Array(N).fill().map(() => []);
    if (M == 0) {
        console.log(N);
        return;
    }

    for (let i = 0; i < M; i++) {
        v1[uv[i][u] - 1].push(uv[i][v] - 1);
        v1[uv[i][v] - 1].push(uv[i][u] - 1);
    }
    let visited = Array(N).fill(false);

    function dfs(index) {
        visited[index] = true;
        for (let v of v1[index]) {
            if (visited[v] == false) {
                dfs(v);
            }
        }
    }
    let Answer = 0;
    for (let i = 0; i < N; i++) {
        if (visited[i] == false) {
            dfs(i);
            Answer++
        }


    }
    console.log(Answer);
}
Main(`36 30
7 22
28 34
6 19
5 6
6 23
12 33
3 27
6 22
22 30
1 36
30 33
3 30
19 25
17 22
19 32
21 32
20 30
19 29
9 11
9 21
9 24
3 7
10 24
4 14
16 36
10 11
3 19
11 28
8 13
25 31`)