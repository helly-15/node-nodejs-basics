// import * as path from "path";
// import {fileURLToPath} from "url";
// import {dirname} from "path";
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

import fs from 'fs/promises';

export async function inputSwitch(inputData, rl, userName) {
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
            const readFilesInDir = async () => {
                try{
                    const filesInDir = await fs.readdir(process.cwd())
                    console.log (filesInDir)
                } catch (err) {
                    console.log ('Operation failed')
                }
            };
            await readFilesInDir();
            break;
        default:
            console.log(`Invalid input`)

    }
    if (inputData !== '.exit') console.log(`You are currently in ${process.cwd()}`)
}