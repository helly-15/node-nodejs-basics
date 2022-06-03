import {createReadStream, createWriteStream} from "fs";
import path, {dirname} from "path";
import {pipeline} from "stream";
import {fileURLToPath} from "url";
import * as zlib from "zlib";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
    // Write your code here
    const gzip = zlib.createGunzip();
    const source = createReadStream('archive.gz');
    const destination = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};
decompress();