 //An event loop is a process that allows time consuming codes (callback functions) to be offloaded to the browers while the immeditate codes are being executed, when there's no more immeditate code to be executed then the call back function code is executed.
 
// console.log('first task');
// setTimeout(()=>{
//     console.log('second task');
// }, 0)
// console.log('next task');
// console.log('third task');
// setTimeout(()=>{
//     console.log('next task');
// })

const {readFile} = require('fs')
console.log('started first task');
//CHECK FILE PATH!!!
readFile('./Built-in Modules/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('Completed first task');
})
console.log('starting next task');