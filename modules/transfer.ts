#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


async function transfer(balance:number)
{
    const answer = await inquirer.prompt([{
        name:"accountNum",
        type:"number",
        message:"Enter account number: "
    },

    {
        name:"amount",
        type:"number",
        message:"Enter your amount: "
    }

]);

if(answer.amount < balance)
{
balance -= answer.amount;
}
else
{
    console.log(chalk.redBright("You have insufficint Balance"));
    balance = await transfer(balance);
    
}

return balance;
}

export default transfer