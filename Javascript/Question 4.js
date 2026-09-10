//Temparatre above 30 hot and below 30 cool
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter temperature in degrees: ', (inputTemp) => {
    let temp = Number(inputTemp);

    if (isNaN(temp)) {
        console.log("Please enter a valid number for temperature.");
    } else if (temp < 30) {
        console.log("Cold");
    } else {
        console.log("Hot");
    }

    rl.close();
});