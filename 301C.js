function Main(input) {
    input = input.split("\n");
    const S = input[0].trim();
    const T = input[1].trim();
    const l = S.length;
    let S_map = new Map();
    let T_map = new Map();
    let S_amari = [];
    let T_amari = [];

    for (let i = 0; i < l; i++) {
        if (!S_map.get(S[i])) {
            S_map.set(S[i], 1);
        }
        else {
            S_map.set(S[i], S_map.get(S[i]) + 1);
        }
        if (!T_map.get(T[i])) {
            T_map.set(T[i], 1);
        }
        else {
            T_map.set(T[i], T_map.get(T[i]) + 1);
        }
    }

    for (const [key, value] of S_map) {
        if (S_map.get(key) == T_map.get(key)) {
            continue;
        }
        if (!T_map.get(key) && key != "@") {
            for (let i = 0; i < value; i++) {
                S_amari.push(key);
            }
        }
        else {
            if (S_map.get(key) > T_map.get(key) && key != "@") {
                let kaisu = S_map.get(key) - T_map.get(key);
                for (let i = 0; i < kaisu; i++) {
                    S_amari.push(key);
                }
            }
        }
    }

    for (const [key, value] of T_map) {
        if (S_map.get(key) == T_map.get(key)) {
            continue;
        }
        if (!S_map.get(key) && key != "@") {
            for (let i = 0; i < value; i++) {
                T_amari.push(key);
            }
        }
        else {
            if (T_map.get(key) > S_map.get(key) && key != "@") {
                let kaisu = T_map.get(key) - S_map.get(key);
                for (let i = 0; i < kaisu; i++) {
                    T_amari.push(key);
                }
            }
        }
    }
    if (S_amari.length <= T_map.get("@")) {
        for (const c of S_amari) {
            if (!["a", "t", "c", "o", "d", "e", "r"].includes(c)) {
                console.log("No");
                return 0
            }
        }
    } else if (S_amari.length != 0) {
        console.log("No");
        return 0
    }
    if (T_amari.length <= S_map.get("@")) {
        for (const c of T_amari) {
            if (!["a", "t", "c", "o", "d", "e", "r"].includes(c)) {
                console.log("No");
                return 0
            }
        }
    } else if (T_amari.length != 0) {
        console.log("No");
        return 0
    }

    console.log("Yes")
}
Main(`a
@`)