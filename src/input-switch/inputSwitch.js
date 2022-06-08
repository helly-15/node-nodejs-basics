// import * as path from "path";
// import {fileURLToPath} from "url";
// import {dirname} from "path";
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

import * as fs from "fs";

export function inputSwitch(inputData, rl, userName) {
    let inputDataforSwitch = inputData;
    if (inputData.includes('cd ')) inputDataforSwitch = 'cd'

    switch (inputDataforSwitch) {
        case '.exit':
            console.log(`Thank you for using File Manager, ${userName}`)
            rl.close();
            break;
        case 'up':
            process.chdir('../');
            break;
        case 'pwd':
            console.log(process.cwd())
            break;
        case 'cd':
            process.chdir(inputData.slice(3));
            break;
        case 'ls':
                fs.readdir(process.cwd(),(err, files)=>{
                    if (err) console.log ('Operation failed')
                    console.log(files)
                });
            break;
        default:
            console.log(`Invalid input`)

    }
    if (inputData !== '.exit') console.log(`You are currently in ${process.cwd()}`)
}