const {readFile, writeFile} = require('fs').promises
// const util = require('util)
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./Built-in Modules/first.txt', 'utf8')
        const second = await readFile('./Built-in Modules/second.txt', 'utf8')
        await writeFile('./Built-in Modules/async-pattern-result.txt', 'this is my result ')

        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start()