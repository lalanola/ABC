function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    const Q = Number(input[1]);
    const Query = input.slice(2).map(input => input.split(" ").map(Number));
    let hako = Array(N).fill().map(array => []);
    let card= new Set()
    for (let i = 0; i < Q; i++) {

        switch (Query[i][0]) {
            case 1:

                break;
            case 2:
                break;
            case 3:
                break;
        }
    }

}

Main(`5
8
1 1 1
1 2 4
1 1 4
2 4
1 1 4
2 4
3 1
3 2`)