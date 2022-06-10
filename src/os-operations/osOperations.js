import * as os from "os";

export function osOperations(operation){
    const operationCode = operation.slice(2)

    switch (operationCode){
        case 'EOL':
            console.log(`Default system end of line is: ${os.EOL}`)
            break;
        case 'cpus':
            console.log(`Overall amount of CPUS: ${os.cpus().length}`);
            os.cpus().forEach((cpu, index)=>console.log(`${index+1} CPU model and clock rate is: ${cpu.model}`))
            break;
        case 'homedir':
            console.log(`Home directory is: ${os.homedir()}`)
            break;
        case 'username':
            console.log(`System username is: ${os.userInfo().username}`)
            break;
        case 'architecture':
            console.log(`Operating system CPU architecture for which the Node.js binary was compiled: ${os.arch()}`)
            break;
    }
}