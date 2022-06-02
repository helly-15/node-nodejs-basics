//--propName value --prop2Name value2
export const parseArgs = () => {
    // Write your code here
    process.argv.forEach((arg,index)=>{
        if (index%2===0 && index !==0){
            console.log(`${arg.substring(2)} is ${process.argv[index+1]}`)
        }
    })
};
parseArgs();