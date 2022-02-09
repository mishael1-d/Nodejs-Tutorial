const os = require("os");

// Get userinfo
const user = os.userInfo();
console.log(user);

//Get system uptime
console.log(`Your system uptime is : ${os.uptime()}`);

//Get current OS
const currentOS = {
    type: os.type(),
    release: os.release(),
    totalMem: Math.ceil(os.totalmem()/1048576).toString() + 'MB',
    freeMem: Math.ceil(os.freemem()/1048576).toString()  + 'MB'
}
console.log(currentOS);