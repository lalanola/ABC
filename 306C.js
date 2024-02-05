function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);

    let array = Array(N).fill().map(a => []);

    for (let i = 0; i < 3 * N; i++) {
        array[A[i] - 1].push(i + 1);
    }
    let arrayWithIndex = array.map((subArray, index) => ({
        index: index + 1,
        value: subArray
    }))

    let sortArrayWithIndex = arrayWithIndex.sort((a, b) => a.value[1] - b.value[1]);
    let originalIndex = sortArrayWithIndex.map(item => item.index);
    console.log(originalIndex.join(" "));
}

Main(`4
2 3 4 3 4 1 3 1 1 4 2 2`)