import * as readline from "readline";
import {inputSwitch} from "./input-switch/inputSwitch.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let userNameArgv = process.argv.slice(3)[0];
let userName = userNameArgv.substring(userNameArgv.indexOf('=') + 1);
console.log(`Welcome to the File Manager, ${userName}`)

rl.on('line', (input) => {
    inputSwitch(input, rl, userName)
});

rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}`)
    rl.close();
});
