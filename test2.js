function main(input) {
    input=input.split("\n");
    const N=Number(input[0]);
    const Q=input[1].split(" ").map(Number);
    const A=input[2].split(" ").map(Number);
    const B=input[3].split(" ").map(Number);
      let ans = 0;
  const INF = 1e18;
  for (let x = 0; x <= Math.max(...Q); x++) {
      let y = INF;
      for (let i = 0; i < N; i++) {
          if (Q[i] < A[i]) {
              y = -INF;
          }
          else if (B[i] > 0) {
              y = Math.min(y, Math.floor((Q[i] - A[i] * x) / B[i]));
          }
      }
      ans = Math.max(ans, x + y);
  }
  console.log(ans);
  }
  
  main(require("fs").readFileSync("/dev/stdin", "utf8"));
