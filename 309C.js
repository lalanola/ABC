function Main(input) {
    input = input.split("\n");
    const [N, K] = input[0].split(" ").map((value, index) => index === 0 ? Number(value) : BigInt(value));;
    const ab = input.slice(1).map(array => array.split(" ").map(BigInt))

    let total = 0n;
    for (let i = 0; i < N; i++) {
        total += ab[i][1];
    }

    if (total <= K) {
        console.log(1);
        return 0;
    }

    
    console.log(total)
}
Main(`15 158260522
877914575 2436426
24979445 61648772
623690081 33933447
476190629 62703497
211047202 71407775
628894325 31963982
822804784 50968417
430302156 82631932
161735902 80895728
923078537 7723857
189330739 10286918
802329211 4539679
303238506 17063340
492686568 73361868
125660016 50287940`)