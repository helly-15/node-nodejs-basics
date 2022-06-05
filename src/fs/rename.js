import fs from 'fs';
import {fileURLToPath} from "url";
import {dirname} from "path";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const rename = async () => {
const oldPath = path.join(__dirname, 'files',"wrongFilename.txt");
const newPath = path.join(__dirname, 'files',"wrongFilename.txt");
    // Write your code here
    if (!fs.existsSync(oldPath) || fs.existsSync(newPath) ) {
        throw new Error('FS operation failed')
    }

    fs.rename(oldPath, newPath, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });

};
rename();