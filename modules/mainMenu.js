#!/usr/bin/env node
import inquirer from "inquirer";
import cashWithdraw from "./cashWidraw.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import Utility from "./utilityBills.js";
import chalk from "chalk";
async function anotherTransaction() {
    const Otrans = await inquirer.prompt([{
            name: "otherTrans",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want another Transaction?"
        }]);
    return Otrans.otherTrans;
}
async function mainMenu(balance) {
    do {
        const options = await inquirer.prompt([{
                name: "menu",
                type: "list",
                choices: ["Balance Inquiry", "Cash Withdraw", "Cash Deposit", "Transfer", "Utility Bills", "Exit"],
                message: "Please select any of the options to proceed! "
            }]);
        switch (options.menu) {
            case "Balance Inquiry":
                console.log(chalk.yellowBright(`Balance = ${balance}`));
                break;
            case "Cash Withdraw":
                balance = await cashWithdraw(balance);
                console.log(chalk.yellow(`Your transaction is successful! New Balance: ${balance}`));
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                console.log(chalk.yellowBright(`Your transaction is successful! New Balance: ${balance}`));
                break;
            case "Transfer":
                balance = await transfer(balance);
                console.log(chalk.yellowBright(`Your transfer has been successfull!! Your new Balance: ${balance}`));
                break;
            case "Utility Bills":
                balance = await Utility(balance);
                console.log(chalk.yellowBright(`Your utility bill has been paid!\nNew Balance: ${balance}`));
                break;
            case "Exit":
                anothertrans = "No";
                break;
        }
        if (options.menu != "Exit") {
            var anothertrans = await anotherTransaction();
        }
        if (anothertrans == "No") {
            console.log(chalk.greenBright("Thank you for your time! :)"));
        }
    } while (anothertrans == "Yes");
}
export default mainMenu;
