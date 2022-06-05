import {Worker, isMainThread, parentPort, workerData} from 'worker_threads';
import {fileURLToPath} from "url";

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const __filename = fileURLToPath(import.meta.url);

export const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    if (isMainThread) {
        let x = 6;
        const worker = new Worker(__filename,{ workerData: {x} });
        worker.on('message', (data) => {
            console.log(data)
        });
    } else {
        let {x} = workerData
        let calcRes = nthFibonacci(x)
        parentPort.postMessage(calcRes)
    }
};
sendResult()