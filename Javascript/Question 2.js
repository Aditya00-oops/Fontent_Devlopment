const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your marks (0-100): ', (inputMarks) => {
    let marks = parseFloat(inputMarks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Please enter valid marks between 0 and 100.");
    } else if (marks >= 90) {
        console.log("Grade: A");
    } else if (marks >= 80) {
        console.log("Grade: B");
    } else if (marks >= 70) {
        console.log("Grade: C");
    } else if (marks >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F (Fail)");
    }

    rl.close();
});