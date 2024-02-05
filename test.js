function findMostFrequentChar(S) {
    let a = new Array(128).fill(0);
    
    for (let c of S) {
        a[c.charCodeAt(0)]++;
    }

    let ans = 'a';
    for (let c = 1; c < a.length; ++c) {
        if (a[c] > a[ans.charCodeAt(0)]) {
            ans = String.fromCharCode(c);
        }
    }

    console.log(ans);
}

// 使用例
 findMostFrequentChar("your_string_here");