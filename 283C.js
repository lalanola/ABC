function Main(input) {
    input = input.split("\n");
    const S = input[0].trim();
    let renzoku0 = [];
    let nowrenzoku0 = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] == 0) {
            nowrenzoku0++;
        }
        else if (nowrenzoku0 > 1) {
            renzoku0.push(nowrenzoku0);
            nowrenzoku0 = 0;
        }
        else {
            nowrenzoku0 = 0;
        }

    }
    if (nowrenzoku0 > 1) {
        renzoku0.push(nowrenzoku0);
    }
    let Answer = S.length - renzoku0.reduce((current, next) => current + next, 0) + renzoku0.map(number => Math.floor(number / 2) + number % 2).reduce((current, next) => current + next, 0)
    console.log(Answer)
}
Main(`1355506027`)//100010000