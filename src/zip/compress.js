import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import {
    createReadStream,
    createWriteStream
} from 'fs';
import path from "path";
import {fileURLToPath} from "url";
import {dirname} from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const compress = async () => {
    // Write your code here
    const gzip = createGzip();
    const source = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const destination = createWriteStream('archive.gz');

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};
compress();