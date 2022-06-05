import fs from 'fs';
import {fileURLToPath} from "url";
import {dirname} from "path";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    // Write your code here
    let sourceFolder = path.join(__dirname,'files',"fileToRead.txt");
    if (!fs.existsSync(sourceFolder)) {
        throw new Error('FS operation failed')
    }

   fs.readFile(sourceFolder, 'utf8', (err, data) => {
       if (err) throw err;
       console.log (data)
   } )


};
read();