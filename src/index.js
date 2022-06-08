import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let userNameArgv = process.argv.slice(3)[0];
let userName = userNameArgv.substring(userNameArgv.indexOf('=') + 1);
console.log(`Welcome to the File Manager, ${userName}`)


// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//
//    // rl.close();
// });