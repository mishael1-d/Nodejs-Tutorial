//This helps to access the file system
const {readFileSync, writeFileSync} = require('fs')
// The readFileSync helps to read from a file from a path
console.log('start');
const first = readFileSync('./first.txt', 'utf8')
const second = readFileSync('./second.txt', 'utf8')

console.log(first, second);
// The writeFileSync helps to write to a file from a path
//If the path doesnt exist it creates the path
writeFileSync('./result.txt', `This result contains: ${first}, and ${second} text`, {flag:'a'}) 
console.log('done with this task');
console.log('starting the next one');