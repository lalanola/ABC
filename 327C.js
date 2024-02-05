function Main(input) {
    input = input.split("\n");
    
    const A = input.map(inputArray => inputArray.split(" ").map(Number));
    function f() {
        for (let i = 0; i < 9; i++) {
            let set_col = new Set();
            let set_row = new Set();
            for (let j = 0; j < 9; j++) {
                set_col.add(A[i][j]);
                set_row.add(A[j][i]);
            }
            for (let i = 1; i <= 9; i++) {
                if (!set_col.has(i)) {
                    return false;
                }
                if (!set_row.has(i)) {
                    return false;
                }
            }
        }
        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                let set = new Set();
                for (let ii = i; ii < i + 3; ii++) {
                    for (let jj = j; jj < j + 3; jj++) {
                        set.add(A[ii][jj]);
                    }
                }
                for (let k = 1; k <= 9; k++) {
                    if (!set.has(k)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    if (f()) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}
Main(`1 2 3 4 5 6 7 8 9
4 5 6 7 8 9 1 2 3
7 8 9 1 2 3 4 5 6
2 3 4 5 6 7 8 9 1
5 6 7 8 9 1 2 3 4
8 9 1 2 3 4 5 6 7
3 4 5 6 7 8 9 1 2
6 7 8 9 1 2 3 4 5
9 1 2 3 4 5 6 7 8

`)