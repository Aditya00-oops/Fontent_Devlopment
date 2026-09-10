// Divisible by 3
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter a number: ', (input) => {
    let num = Number(input);

    if (num % 3 === 0) {
        console.log("Divisible by 3");
    } else {
        console.log("Not divisible by 3");
    }
    rl.close();
});