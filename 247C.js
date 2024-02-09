const util = require('util');
function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    let S = ["", "1"];
    if (N == 1) {
        console.log(1);
        return 
    }
    for (let i = 2; i <= N; i++) {
        S.push(S[i - 1] +" "+ i.toString() +" "+ S[i - 1]);
    }
    console.log(S[S.length - 1])
}
Main(`5`)