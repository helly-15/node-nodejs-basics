import fs from 'fs/promises';
import {fileURLToPath} from "url";
import path, {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
    const {
        createHash
    } = await import('crypto');
    let sourceFolder = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const calchash = async () => {
        const hash = createHash('sha256');
        const data = await fs.readFile(sourceFolder, "utf8");
        hash.update(Buffer.from(data));
        return hash.copy().digest('hex')
    }
    console.log(await calchash());
    return await calchash();

};
calculateHash();