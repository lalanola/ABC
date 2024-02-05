function Main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    let count = 0;
    if (N % 2 == 1) {

        for (let i = 1; i <= Math.floor(N / 2); i++) {
            let tmp1 = new Set();
            let tmp2 = new Set();
            for (let j = 1; j * j <= i; j++) {
                if (i % j == 0) {
                    tmp1.add(j);
                    tmp1.add(i / j);
                }
            }
            for (let j = 1; j * j <= N - i; j++) {
                if ((N - i) % j == 0) {
                    tmp2.add(j);
                    tmp2.add((N - i) / j);
                }
            }
            count += 2 * tmp1.size * tmp2.size;
        }

    }
    else {
        for (let i = 1; i < N / 2; i++) {
            let tmp1 = new Set();
            let tmp2 = new Set();
            for (let j = 1; j * j <= i; j++) {
                if (i % j == 0) {
                    tmp1.add(j);
                    tmp1.add(i / j);
                }
            }
            for (let j = 1; j * j <= N - i; j++) {
                if ((N - i) % j == 0) {
                    tmp2.add(j);
                    tmp2.add((N - i) / j);
                }
            }
            count += 2 * tmp1.size * tmp2.size;
        }
        let tmp = new Set();
        for (let j = 1; j * j <= N / 2; j++) {
            if (N / 2 % j == 0) {
                tmp.add(j);
                tmp.add((N / 2) / j);
            }
        }
        count += tmp.size * tmp.size;

    }

    console.log(count);
}
Main(`292`)