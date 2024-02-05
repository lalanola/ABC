function Main() {

    const S = "abczdef";
    const T = "abcdef"

    let si = 0;

    for (let ti = 0; ti < T.length; ti++) {
        while (si < S.length && S[si] != T[ti]) {
            si++;
        }
        if (si == S.length) {
            return false;
        }
    }
    return true

}