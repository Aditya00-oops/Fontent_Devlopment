// boolean check by true and false
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter a boolean value (true/false): ', (input) => {
    let val = input.trim().toLowerCase();

    if (val === 'true') {
        console.log("True");
    } else {
        console.log("False");
    }
    
    rl.close();
});