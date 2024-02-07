function Main(input) {
    input = input.split("\n");
    const [H, W] = input[0].split(" ").map(Number);
    const G = input.slice(1);
    let i = 0;
    let j = 0;
    let visited = Array(H).fill().map(array => Array(W).fill(false));
    while (1) {
        switch (G[i][j]) {
            case "U":
                if (visited[i][j] == true) {
                    console.log(-1);
                    return;
                }
                visited[i][j] = true;
                if (i != 0) {
                    i--;
                }
                else {
                    console.log((i + 1) + " " + (j + 1))
                    return
                }
                break;
            case "D":
                if (visited[i][j] == true) {
                    console.log(-1);
                    return;
                }
                visited[i][j] = true;
                if (i != H - 1) {
                    i++;
                }
                else {
                    console.log((i + 1) + " " + (j + 1))
                    return
                }
                break;
            case "L":
                if (visited[i][j] == true) {
                    console.log(-1);
                    return;
                }
                visited[i][j] = true;
                if (j != 0) {
                    j--;
                }
                else {
                    console.log((i + 1) + " " + (j + 1))
                    return
                }
                break;
            case "R":
                if (visited[i][j] == true) {
                    console.log(-1);
                    return;
                }
                visited[i][j] = true;
                if (j != W - 1) {
                    j++
                }
                else {
                    console.log((i + 1) + " " + (j + 1))
                    return
                }
                break;
        }
    }
}

Main(`9 44
RRDDDDRRRDDDRRRRRRDDDRDDDDRDDRDDDDDDRRDRRRRR
RRRDLRDRDLLLLRDRRLLLDDRDLLLRDDDLLLDRRLLLLLDD
DRDLRLDRDLRDRLDRLRDDLDDLRDRLDRLDDRLRRLRRRDRR
DDLRRDLDDLDDRLDDLDRDDRDDDDRLRRLRDDRRRLDRDRDD
RDLRRDLRDLLLLRRDLRDRRDRRRDLRDDLLLLDDDLLLLRDR
RDLLLLLRDLRDRLDDLDDRDRRDRLDRRRLDDDLDDDRDDLDR
RDLRRDLDDLRDRLRDLDDDLDDRLDRDRDLDRDLDDLRRDLRR
RDLDRRLDRLLLLDRDRLLLRDDLLLLLRDRLLLRRRRLLLDDR
RRRRDRDDRRRDDRDDDRRRDRDRDRDRRRRRRDDDRDDDDRRR`)