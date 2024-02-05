function Main() {

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const N = 777;
    let n = 0;
    function f(maxnumber) {
        let itibanmigi = maxnumber % 10;
        for (let i = 0; i <= 9; i++) {
            if (itibanmigi > i) {
                array.push(Number(maxnumber.toString() + i.toString()))
                n++
                if (array.length == N) {
                    return true;
                }
            }

        }
        return false;
    }

    if (N <= 9) {
        console.log(N);
    }
    else {
        while (1) {
            for (let i = 0; i <= array.length; i++) {//2桁目
                if(f(array[i])){
                    console.log(array[array.length-1])
                    return 
                }
            }
        }
    }
}

Main()
