import {Transform} from 'stream'

export const transform = async () => {
    // Write your code here
    let fileStream = process.stdin;
    const transformedData= process.stdout;

    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse());
        },
    });

    fileStream.pipe(reverse).pipe(transformedData);
};
transform();