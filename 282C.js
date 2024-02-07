function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    const S = input[1].trim().split("");
    let sw = false;
    for (let i = 0; i < N; i++) {
        if (S[i] == "\"") {
            sw = !sw;
        }
        else if (S[i] == ",") {
            if (sw == false) {
                S[i] = ".";
            }
        }
    }
    console.log(S.join(""))
}
Main(`20
a,"t,"c,"o,"d,"e,"r,
`)