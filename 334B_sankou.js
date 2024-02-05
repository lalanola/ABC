function divfloor(x, y) {
    return Math.floor(x / y);
}

function divceil(x, y) {
    return Math.ceil(x / y);
}

function calculate(A, M, L, R) {
    let r = divfloor(R - A, M);
    let l = divceil(L - A, M);
    return r - l + 1;
}


let result = calculate(5, 3, -1, 6);
console.log(result);    