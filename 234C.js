function Main(input) {
    input = input.split("\n");
    const K = BigInt(input[0]);
    let K_bit = K.toString(2).split("");
    for (let i = 0; i < K_bit.length; i++) {
        if (K_bit[i] == "1") {
            K_bit[i] = "2";
        }
    }
    console.log(K_bit.join(""))
}
Main(`923423423420220108`)
//220022020000202020002022022000002020002222002200002022002200
//220022020000202020002022022000002020002222002200002022002200