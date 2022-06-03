// Enter any texts in console( User input)
import fs from 'fs';

import {fileURLToPath} from "url";
import path, {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const write = async () => {
    // Write your code here
    let writebleProcess = process.stdin;
    let writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'))
    writebleProcess.pipe(writeStream)
};
write();