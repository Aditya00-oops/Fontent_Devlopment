 // Check no is zero
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter a number: ', (input) => {
    let num = Number(input);

    if (num === 0) {
        console.log("Zero");
    } else {
        console.log("Non-Zero");
    }
    rl.close();
});