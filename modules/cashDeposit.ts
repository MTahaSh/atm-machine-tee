#!/usr/bin/env node
import inquirer from "inquirer";


async function cashDeposit(balance:number)
{
    const amount = await inquirer.prompt([{
        name:"userAmount",
        type:"number",
        message:"Enter your amount: "
    }]);


    balance += amount.userAmount;
    return balance;

}


export default cashDeposit;