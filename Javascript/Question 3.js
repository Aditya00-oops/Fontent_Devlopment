// Even no And Odd no
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (inputNumber) => {
    let number = Number(inputNumber);

    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else if (number % 2 === 0) {
        console.log(`${number} is Even.`);
    } else {
        console.log(`${number} is Odd.`);
    }

    rl.close();
});