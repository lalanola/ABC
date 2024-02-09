function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    const A = [0,...input[1].split(" ").map(Number)];
    let onaji = [];
    let tigau = new Map();
    for (let i = 1; i <= N; i++) {
        if (A[i] == i) {
            onaji.push(i);
        }
        else {
            tigau.set(i, A[i])
        }
    }
    let onaji_kumiawase = ((onaji.length * (onaji.length - 1)) / 2);
    let tigau_kumiawase = 0;
    for (const [key, value] of tigau.entries()) {
        if (key == tigau.get(value)) {
            if (value > key) {
                tigau_kumiawase++;
            }
        }
    }
    console.log(onaji_kumiawase + tigau_kumiawase)
}
Main(`4
1 3 2 4`)