import inquirer from "inquirer";
let myBalace = 10000; //Dollar
let myPin = 3002;
let pinCode = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin:",
        type: "number"
    }]);
if (pinCode.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([{
            name: "Operation",
            message: "please select option",
            type: "list",
            choices: ["Widthraw", "Check Balace"]
        }]);
    if (operationAns.Operation === "Widthraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount : ",
                type: "number"
            }]);
        myBalace -= amountAns.amount;
        console.log("Your remaining amount is :" + myBalace);
    }
    else if (operationAns.Operation === "Check Balance") {
        console.log("your balance is : " + myBalace);
    }
}
