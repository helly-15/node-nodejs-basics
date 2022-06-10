import fs from 'fs/promises';
import {osOperations} from "../os-operations/osOperations.js";
import * as zlib from "zlib";
import {createWriteStream, createReadStream} from 'fs';
import {pipeline} from "stream";
import os from "os";

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
        case 'rn':
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

        case 'mv':
            const moveFile = async () => {
                try {
                    await fs.copyFile(sourcePath, targetPath);
                    await fs.rm(sourcePath);
                } catch (err) {
                    console.log('Operation failed')
                }
            };
            await moveFile();
            break;
        case 'rm':
            const removeFile = async () => {
                try {
                    await fs.rm(sourcePath);
                } catch (err) {
                    console.log('Operation failed')
                }
            };
            await removeFile();
            break;
        case 'os':
            try {
                osOperations(sourcePath);
            } catch (err) {
                console.log('Operation failed')
            }
            break;
        case 'hash':
            const {createHash} = await import('crypto');
            try {
                const calchash = async () => {
                    const hash = createHash('sha256');
                    const data = await fs.readFile(sourcePath, "utf8");
                    hash.update(Buffer.from(data));
                    return hash.copy().digest('hex')
                }
                console.log(await calchash());
            } catch (err) {
                console.log('Operation failed')
            }
            break;

        case 'compress':
            const sourceReadStrim = createReadStream(sourcePath);
            const destinationWriteStream = createWriteStream(targetPath);
            const brot = zlib.createBrotliCompress();
            pipeline(sourceReadStrim, brot, destinationWriteStream, (err) => {
                if (err) {
                    console.error('Operation failed:', err);
                }
            });
            break;
        case 'decompress':
            const sourceReadStrimDec = createReadStream(sourcePath);
            const destinationWriteStreamDec = createWriteStream(targetPath);
            const brotDecompress = zlib.createBrotliDecompress();
            pipeline(sourceReadStrimDec, brotDecompress, destinationWriteStreamDec, (err) => {
                if (err) {
                    console.error('Operation failed:', err);
                }
            });
            break;

        default:
                console.log(`Invalid input`)
    }
    if (inputData !== '.exit') console.log(`You are currently in ${process.cwd()}`)
}