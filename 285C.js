function Main(input) {
    input = input.split("\n");
    const S = input[0].trim().split("").reverse().join("");
    const AZ = 26n;
    let Answer = 0n;
    for (let i = 0; i < S.length; i++) {
        let str_bango = BigInt(S[i].charCodeAt(0) - 64);
        let tmp = str_bango;
        for (let j = 0; j < i; j++) {
            tmp *= AZ
        }
        Answer += tmp;
    }
    console.log(Answer.toString());
}
Main(`BRUTMHYHIIZM`)