#!/usr/bin/env node
import users from "./users.js";
import inquirer from "inquirer";
import mainMenu from "./mainMenu.js";
async function login() {
    const answer = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Please enter your Account Number: "
        },
        {
            name: "pin",
            type: "password",
            message: "Enter your pin code: "
        }
    ]);
    let user = users.find(x => x.accountNumber === answer.accountNumber && x.pincode === answer.pin);
    if (typeof user !== "undefined") {
        console.log(`Welcome ${user.name}`);
        mainMenu(user.balance);
    }
    else {
        console.log("You entered invalid pin or acc number!");
    }
}
export default login;
