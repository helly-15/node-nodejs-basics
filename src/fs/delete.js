import fs from 'fs';
import {fileURLToPath} from "url";
import {dirname} from "path";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
    // Write your code here
    const filePath = path.join(__dirname, 'files',"fileToRemove.txt");
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed')
    }
    fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log('path/file.txt was deleted');
    });
};
remove();