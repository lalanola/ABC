function main(input) {
    input = input.split(" ").map(BigInt);
    const A = input[0];
    const M = input[1]
    const L = input[2]
    const R = input[3]

    let new_L = L + (A - L) % M;
    let new_R = R - (R - A) % M;

    console.log(((new_R - new_L) / M + 1n).toString());
}

main("-2 2 1 1");
