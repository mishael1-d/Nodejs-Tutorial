//Allows us to interact with system file paths
const path = require('path')
//sep method is not a function so no need for () 
console.log(path.sep);
//join method helps you to join filePaths together
const filePath = path.join('/Built-in Modules', 'os.js')
console.log(filePath);
//Get the basename of a path
const base = path.basename(filePath)
console.log(base);
//Get the absolute path for a dir
const absolute = path.resolve(__dirname, '/Built-in Modules', 'os.js')
console.log(absolute);