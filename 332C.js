function Main(input) {
    input = input.split("\n");
    const [N, M] = input[0].split(" ").map(Number);
    const S = input[1].trim();
    let m = 0;
    let renzoku = 0;
    let Answer = 0;
    for (let i = 0; i < N; i++) {
        switch (S[i]) {
            case "0":
                Answer = Math.max(Answer, renzoku);
                m = 0;
                renzoku = 0;
                break;
            case "1":
                if (m < M) {
                    m++
                }
                else {
                    renzoku++;
                }
                break;
            case "2":
                renzoku++;
                break;
        }
    }
    Answer = Math.max(Answer, renzoku);
    console.log(Answer)
}
Main(`2 1
01`)