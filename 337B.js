function main(input) {

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "B") {
            for (let j = i + 1; j < input.length; j++) {
                if (input[j] != "B" && input[j] != "C") {
                    console.log("No")
                    return 0
                }
            }
        }
        if (input[i] == "C") {
            for (let j = i + 1; j < input.length; j++) {
                if (input[j] != "C") {
                    console.log("No")
                    return 0
                }
            }
        }
    }
    console.log("Yes")

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));