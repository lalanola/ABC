function Main(input) {
    input = Number(input);
    let answer = "";
    for (let i = 0; i < input; i++) {
        answer += input.toString();
    }
    console.log(answer)
}
Main(3)