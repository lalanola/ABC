function main(input) {
    input = input.split(" ").map(BigInt);
    const A = input[0];
    const M = input[1]
    const L = input[2]
    const R = input[3]

    // console.log(Math.ceil((L - A) / M));
    // console.log(Math.floor((R - A) / M));
    let new_L = Math.ceil((L - A) / M);
    let new_R = Math.floor((R - A) / M);

    console.log(new_R - new_L + 1);
}

main("-2 2 1 1");

//