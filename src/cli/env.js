// set env variable on Windows powershell $env:USER_ID_TEST = ';MyTestResourceGroup2'
export const parseEnv = () => {
    // Write your code here
   // console.log(process.env)
   // console.log(process.env.USER_ID_TEST)
    const envVarArray = Object.entries(process.env);
    const filteredEnvVar = envVarArray.filter(([key, value]) => key.slice(0,4) === 'RSS_');
    filteredEnvVar.forEach(([envvarkey, envvarvalue])=>console.log(`${envvarkey}=${envvarvalue}`))

};
parseEnv();