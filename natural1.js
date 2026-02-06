const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", (n) => {
  n = Number(n);

  if (isNaN(n)) {
    console.log("Invalid number");
  } else {
    if (n > 0) {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum = sum + i;
      }
      console.log("Sum =", sum);
    } else {
      console.log("Should be positive and more than 0");
    }
  }

  rl.close();
});
