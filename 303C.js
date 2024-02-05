function Main(input) {
    input = input.split("\n");
    const [N, M, H, K] = input[0].split(" ").map(Number);
    const S = input[1].trim();
    const xy = input.slice(2).map(array => array.split(" ").map(Number));
    const x = 0;
    const y = 1;
    function create2DMapProxy() {
        const map = new Map();

        return new Proxy(map, {
            get: function (target, propKey) {
                let row = target.get(propKey);
                if (!row) {
                    row = new Map();
                    target.set(propKey, row);
                }

                return new Proxy(row, {
                    get: function (target, propKey) {
                        return target.get(propKey);
                    },
                    set: function (target, propKey, value) {
                        return target.set(propKey, value);
                    }
                });
            }
        });
    }

    const twoDMap = create2DMapProxy();

    for (let i = 0; i < M; i++) {
        twoDMap[xy[x]].set(xy[y],true);
    }
    console.log(twoDMap)
    for (let i = 0; i < N; i++) {
        switch (S[i]) {
            case "R":
                break;
            case "L":
                break;
            case "U":
                break;
            case "D":
                break;
        }
    }
}

Main(`4 2 3 1
RUDL
-1 -1
1 0`)