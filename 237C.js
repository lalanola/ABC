function Main(input) {
    input = input.split("\n");
    const S = input[0].trim().split("")
    const R_S = [...S].reverse();

    if (S.join("").toString() == R_S.join("").toString()) {
        console.log("Yes");
        return
    }
    let sento_a_renzoku = 0;
    let sento_a_renzoku_i = 0;
    let usiro_a_renzoku = 0;
    let usiro_a_renzoku_i = S.length - 1
    if (S[0] == "a") {
        while (sento_a_renzoku_i < S.length) {
            if (S[sento_a_renzoku_i] != "a") {
                break;
            }
            sento_a_renzoku_i++;
            sento_a_renzoku++
        }
    }
    if (S[S.length - 1] == "a") {
        while (usiro_a_renzoku_i >= 0) {
            if (S[usiro_a_renzoku_i] != "a") {
                break;
            }
            usiro_a_renzoku_i--;
            usiro_a_renzoku++
        }
    }
    if (usiro_a_renzoku >= sento_a_renzoku) {
        let bubunnretu = S.slice(sento_a_renzoku_i, usiro_a_renzoku_i + 1);
        let bubunnretu_R = [...bubunnretu].reverse();
        if (bubunnretu.join("") == bubunnretu_R.join("")) {
            console.log("Yes")
            return
        }
    }
    console.log("No");
}
Main(`baaaaaa`)