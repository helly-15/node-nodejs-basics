import fs from 'fs';
import {fileURLToPath} from "url";
import {dirname} from "path";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const copy = async () => {
    // Write your code here

    // Check if folder needs to be created or integrated
    let sourceFolder = path.join(__dirname, 'files');
    let targetFolder = path.join(__dirname, 'files_copy');

    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    } else throw new Error('FS operation failed');

    if (!fs.existsSync(sourceFolder)) {
        throw new Error('FS operation failed')
    }


    // Copy

    let files = fs.readdirSync(sourceFolder);
    files.forEach(function (file) {
        let sourceFilePath = path.join(sourceFolder, file);
        let targetFilePath = path.join(targetFolder, file);
        fs.writeFileSync(targetFilePath , fs.readFileSync(sourceFilePath));
    });
};
copy();