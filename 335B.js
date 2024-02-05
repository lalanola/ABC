function main(input) {
    input = Number(input);
    for (let i = 0; i <= input; i++) {
        for (let j = 0; j <= input - i; j++) {
            for (let k = 0; k <= input - i - j; k++) {
                console.log(i + " " + j + " " + k)
            }
        }
    }
}
main(3)