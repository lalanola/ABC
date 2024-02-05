function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    const S = input[1].trim();
    let mainasu = false;
    let maxlevel = 0;
    let nowlevel = 0;
    for (let i = 0; i < N; i++) {
        if (S[i] == "o") {
            nowlevel++;
        }
        else {
            mainasu = true;
            maxlevel = Math.max(maxlevel, nowlevel);
            nowlevel = 0;
        }
    }
    if (S[S.length - 1] == "o" && mainasu) {
        maxlevel = Math.max(maxlevel, nowlevel);
    }
    if (maxlevel) {
        console.log(maxlevel)
    }
    else {
        console.log(-1);
    }
}

Main(`17
-oooooooooooooooo`)