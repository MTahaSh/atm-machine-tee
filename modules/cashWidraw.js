#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function otherAmount(balance) {
    const otherAmt = await inquirer.prompt([{
            name: "otherAmount",
            type: "number",
            message: "Please enter your amount: "
        }]);
    if (otherAmt.otherAmount < balance) {
        balance -= otherAmt.otherAmount;
    }
    else {
        console.log(chalk.redBright("You have insufficint Balance"));
        balance = await otherAmount(balance);
    }
    return balance;
}
async function cashWithdraw(balance) {
    const cash = await inquirer.prompt([{
            name: "amount",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "10000", "Other Amount"],
            message: "Please Select the amount: "
        }]);
    switch (cash.amount) {
        case "500":
            if (balance > Number(cash.amount)) {
                balance -= 500;
                console.log(chalk.yellowBright(`Successfully, 500 has been deducted!\n New Balance: ${balance}`));
            }
            else {
                console.log(chalk.redBright("You have insufficint Balance"));
            }
            break;
        case "1000":
            if (balance > Number(cash.amount)) {
                balance -= 1000;
                console.log(chalk.yellowBright(`Successfully, 1000 has been deducted!\n New Balance: ${balance}`));
            }
            else {
                console.log(chalk.redBright("You have insufficint Balance"));
            }
            break;
        case "2000":
            if (balance > Number(cash.amount)) {
                balance -= 2000;
                console.log(chalk.yellowBright(`Successfully, 2000 has been deducted!\n New Balance: ${balance}`));
            }
            else {
                console.log(chalk.redBright("You have insufficint Balance"));
            }
            break;
        case "5000":
            if (balance > Number(cash.amount)) {
                balance -= 5000;
                console.log(chalk.yellowBright(`Successfully, 500 has been deducted!\n New Balance: ${balance}`));
            }
            else {
                console.log(chalk.redBright("You have insufficint Balance"));
            }
            break;
        case "10000":
            if (balance > Number(cash.amount)) {
                balance -= 10000;
                console.log(chalk.yellowBright(`Successfully, 10000 has been deducted!\n New Balance: ${balance}`));
            }
            else {
                console.log(chalk.redBright("You have insufficint Balance"));
            }
            break;
        case "Other Amount":
            balance = await otherAmount(balance);
            console.log(`Your new balance is: ${balance}`);
            break;
    }
    return balance;
}
export default cashWithdraw;
