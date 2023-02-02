import inquirer from "inquirer";

const conversion = {
    "PKR": {
        "PKR": 1, 
        "USD": 0.0044,
        "GBP": 0.0037
    },
    "GBP": {
        "PKR": 271.70, 
        "USD": 1.21,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50, 
        "USD": 1,
        "GBP": 0.83
    },
}
const response: {

    from_Currrency: 'PKR' | 'GBP' | 'USD',
    digit: string,
    to_Currrency: 'PKR' | 'GBP' | 'USD'

} = await inquirer.prompt([
    {
        name: "from_Currrency",
        type: "list",
        choices: ["PKR", "GDP", "USD"],
        message: "Select currency from which you want to convert",
    },
    {
        name: "digit",
        type: "number",
        message: "Enter the digit you want to convert"
    },
    {
        name: "to_Currrency",
        type: "list",
        choices: ["PKR", "GDP", "USD"],
        message: "Select currency to which you want to convert",
    },
]);

const {from_Currrency, digit, to_Currrency} = response;
if (from_Currrency && digit && to_Currrency) {
    console.log(`The convertion of ${digit} ${from_Currrency} into ${to_Currrency} is `, conversion[from_Currrency][to_Currrency] * +digit);
    
} else {
    console.log("Invalid input , Please input all values carefully");
}