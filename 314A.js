function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    const pi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

    let l = N + 2;
    let str = []
    for (let i = 0; i < l; i++) {
        str.push(pi[i]);
    }
    console.log(str.join(""));
}
Main(`100`)