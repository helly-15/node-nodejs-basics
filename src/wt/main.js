import os from 'os';
import {fileURLToPath} from "url";
import {Worker, isMainThread, workerData, BroadcastChannel} from 'worker_threads';
import {nthFibonacci} from "./worker.js";

const __filename = fileURLToPath(import.meta.url);
const bc = new BroadcastChannel('channelFibonacci')

export const performCalculations = async () => {
    // Write your code here
    const systemCpuCores = os.cpus().length;
    let resultArray = [];
    if (isMainThread) {

        for (let n = 10; n < 10 + systemCpuCores; n++) {
            console.log(n)
            const n = 10;
            new Worker(__filename, {workerData: {n}});
        }

        bc.onmessage = (msg) => {
            resultArray.push({status: 'resolved?', data: msg})
        }

    } else {
        let {n} = workerData

        let calcRes = nthFibonacci(n);
        bc.postMessage(calcRes)
    }

    console.log(resultArray)
};
performCalculations();