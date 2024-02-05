function Main(input) {
    input = input.split("\n");
    const N = Number(input[0])
    const S = input.slice(1);
    let syouhai = Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (S[i][j] == "o") {
                syouhai[i]++;
            }
        }
    }
    let map_shouhai = syouhai.map((value, index) => ({ value, index }))
    map_shouhai.sort((a, b) => {
        if (a.value == b.value) {
            return a.index - b.index
        }

        return b.value - a.value;
    })
    let index = map_shouhai.map(pair => pair.index + 1);
    console.log(index.join(" "));
}
Main(`7
-oxoxox
x-xxxox
oo-xoox
xoo-ooo
ooxx-ox
xxxxx-x
oooxoo-
`)