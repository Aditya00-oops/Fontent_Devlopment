// no is positive or negative
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter a number: ', (input) => {
    let num = Number(input);

    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Number is Zero");
    }
    rl.close();
});