#!/usr/bin/env node
import inquirer from "inquirer";
const electric = Math.ceil(Math.random() * 1000 + 1);
const gas = Math.ceil(Math.random() * 1000 + 1);
const phone = Math.ceil(Math.random() * 1000 + 1);
const cable = Math.ceil(Math.random() * 1000 + 1);
async function Utility(balance) {
    const input = await inquirer.prompt([{
            name: "utility",
            type: "list",
            choices: ["electric", "gas", "phone", "cable"],
            message: "Please select your utility type?"
        }]);
    switch (input.utility) {
        case "electric":
            console.log(`Your electric bill is: ${electric}`);
            balance -= electric;
            break;
        case "gas":
            console.log(`Your gas bill is: ${gas}`);
            balance -= gas;
            break;
        case "phone":
            console.log(`Your phone bill is: ${phone}`);
            balance -= phone;
            break;
        case "cable":
            console.log(`Your cable bill is: ${cable}`);
            balance -= cable;
            break;
    }
    return balance;
}
export default Utility;
