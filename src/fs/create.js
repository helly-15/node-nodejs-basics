import fs from 'fs';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import * as path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const create = async () => {


    fs.access(path.join(__dirname, 'files',"fresh.txt"), fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile (
                path.join(__dirname, 'files',"fresh.txt"),
                "I am fresh and young" ,
                (err) => {
                    if (err)
                        throw new Error('FS operation failed')
                })
        } else {
            throw new Error('FS operation failed')
        }
    });
};
create();