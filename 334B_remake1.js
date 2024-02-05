function main(input) {
    input = input.split(" ").map(BigInt);
    const A = input[0];
    const M = input[1];
    const L = input[2];
    const R = input[3];

    let new_L = A + M * ((L - A) / M + (L - A) % M > 0n ? 1n : 0n);
    let new_R = A + M * ((R - A) / M);

    console.log((new_R - new_L) / M + 1n);
}

main("645762258982631929 161735902 -180124858119104275 349993004923078534");