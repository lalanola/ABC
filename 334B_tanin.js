function floor (x, m) {
    const r = (x % m + m) % m;
    return (x - r) / m;
}

function Main(input) {
    const inputArray = input.split('\n');
    const [A, M, L, R] = inputArray[0].split(' ').map(BigInt);

    const pL = L - A;
    const pR = R - A;

    console.log((floor(pR, M) - floor(pL - 1n, M)).toString());
}

Main("5 3 -1 6")