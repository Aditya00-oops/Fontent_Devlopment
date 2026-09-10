// Selling price more than purchesing find profit and loss
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter Cost Price (CP): ', (cpInput) => {
    rl.question('Enter Selling Price (SP): ', (spInput) => {
        let cp = Number(cpInput);
        let sp = Number(spInput);

        if (sp > cp) {
            console.log(`Profit Amount: ${sp - cp}`);
        } else if (sp < cp) {
            console.log(`Loss Amount: ${cp - sp}`);
        } else {
            console.log("No Profit No Loss");
        }
        rl.close();
    });
});