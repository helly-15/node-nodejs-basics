import fs from 'fs';

import {fileURLToPath} from "url";
import path, {dirname} from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const read = async () => {
    // Write your code here
    const stream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
    stream.pipe(process.stdout)
};
read();