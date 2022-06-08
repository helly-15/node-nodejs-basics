// import * as path from "path";
// import {fileURLToPath} from "url";
// import {dirname} from "path";
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

import fs from 'fs/promises';

const possibleCommands = ['cd', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress']

export async function inputSwitch(inputData, rl, userName) {
    let inputDataForSwitch = inputData;

    possibleCommands.forEach(command => {
            if (inputData.startsWith(command)) {
                inputDataForSwitch = command
            }
        }
    )
    let sourcePath = inputData.split(' ')[1];
    let targetPath = inputData.split(' ')[2];
    switch (inputDataForSwitch) {
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
            process.chdir(sourcePath);
            console.log(inputData)
            console.log(sourcePath)
            break;
        case 'ls':
            const readFilesInDir = async () => {
                try {
                    const filesInDir = await fs.readdir(process.cwd())
                    console.log(filesInDir)
                } catch (err) {
                    console.log('Operation failed')
                }
            };
            await readFilesInDir();
            break;
        case 'cat':
            const readFile = async () => {
                try {
                    const fileContent = await fs.readFile(sourcePath, 'utf-8')
                    console.log(fileContent)
                } catch (err) {
                    console.log('Operation failed: file does not exist')
                }
            };
            await readFile();
            break;
        case 'add':
            const createFile = async () => {
                try {
                    await fs.writeFile('fileToWrite.txt', ' ')
                } catch (err) {
                    console.log('Operation failed')
                }
            };
            await createFile();
            break;
        case 'rm':
            const renameFile = async () => {
                try {
                    await fs.rename(sourcePath, targetPath)
                } catch (err) {
                    console.log('Operation failed')
                }
            };
            await renameFile();
            break;
        case 'cp':
            const copyFile = async () => {
                try {
                        await fs.copyFile(sourcePath, targetPath);
                } catch (err) {
                    console.log('Operation failed')
                }
            };
            await copyFile();
            break;

        default:
            console.log(`Invalid input`)

    }
    if (inputData !== '.exit') console.log(`You are currently in ${process.cwd()}`)
}