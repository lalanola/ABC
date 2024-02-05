function Main(input) {
    input = input.split("\n");
    const N = Number(input[0])
    const S = input[1]

    let map = new Map();
    let renzoku = 1;
    for (let i = 0; i < N; i++) {
        if (i > 0 && S[i] != S[i - 1]) {
            renzoku = 1;
        }
        else if (S[i] == S[i - 1]) {
            renzoku++
        }
        if (!map.get(S[i])) {
            map.set(S[i], 1);
        }
        else if (map.get(S[i]) < renzoku) {
            map.set(S[i], map.get(S[i]) + 1);
        }

    }
    let sum = 0;
    for (let value of map.values()) {
        sum += value;
    }
    console.log(sum);

}

Main(`12
ssskkyskkkky`)