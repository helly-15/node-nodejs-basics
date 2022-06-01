import fs from 'fs';
import {fileURLToPath} from "url";
import {dirname} from "path";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
    let sourceFolder = path.join(__dirname, 'files');
    // Write your code here
    if (!fs.existsSync(sourceFolder)) {
        throw new Error('FS operation failed')
    }

    let files = fs.readdirSync(sourceFolder);
    console.log(files)
};
list();