function Main() {
    let list = [];
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= 9;j++) {
            if (i * j <= 9) {
                list.push(i.toString() + j.toString());
            }
        }
    }
    console.log(list)
}

Main()