const { copyFileSync } = require("fs");

function Main(input) {
    input = input.split("\n");
    const [x1, y1, x2, y2] = input[0].split(" ").map(BigInt);
    function sqrtBigInt(n) {
        if (n < 0n) {
          throw 'Square root of negative numbers is not supported.';
        }
        if (n < 2n) {
          return n;
        }
        function newtonIteration(n, x0) {
          const x1 = (n / x0 + x0) >> 1n;
          if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
          }
          return newtonIteration(n, x1);
        }
        return newtonIteration(n, n);
      }
    let kyori=sqrtBigInt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    if(kyori<=2n*sqrtBigInt(5n)){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}
Main(`0 1 2 3`)