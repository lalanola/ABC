function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    const ST = input.slice(1).map(array => array.split(" ").map((e, index) => {
        if (index == 1) {
            return Number(e);
        }
        else {
            return e;
        }
    }))
    const s = 0;
    const t = 1;
    let map = new Map();
    for (let i = 0; i < N; i++) {
        if (!map.has(ST[i][s])) {
            map.set(ST[i][s], [ST[i][t], i]);
        }
    }
    let arrayWithIndex = Array.from(map).map((subArray) => ({ index: subArray[1][1], value: subArray[1][0] }));
    arrayWithIndex.sort((a, b) => {
        if (a.value != b.value) {
            return b.value - a.value
        }
        else {
            return a.index - b.index
        }
    })
    console.log(arrayWithIndex[0].index+1)
}
Main(`10
bb 3
ba 1
aa 4
bb 1
ba 5
aa 9
aa 2
ab 6
bb 5
ab 3`)