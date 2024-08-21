#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter Your Pin Number : ",
        type: "number"
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "Select One Operation!",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter Your Withdraw Amount: ",
                type: "number"
            }]);
        myBalance -= amountAns.amount;
        console.log(`Your Remaining Balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code!");
}
