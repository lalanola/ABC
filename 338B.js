

function main(input) {
    let object = {};
    for (const char of input) {
        if (object[char]) {
            object[char]++
        } else {
            object[char] = 1;
        }
    }
    let answer = "a";
    for (let char = "b"; char <= "z"; char++) {
        if (object[answer] < object[char]) {
            answer = char;
        }
    }
    console.log(answer)
}

main("helloworld");

// function findMostFrequentChar(S) {
//     let frequency = {};
//     [...S].forEach(char => frequency[char] = (frequency[char] || 0) + 1);
//     // console.log(Object.keys(frequency).sort().reduce((a, b) => frequency[a] >= frequency[b] ? a : b));
// }
// findMostFrequentChar("helo world")
