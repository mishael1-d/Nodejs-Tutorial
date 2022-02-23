const http = require('https')

const server = http.createServer((req, res)=>{
    console.log('request event');
})
server.listen(5000, ()=>{
    console.log('Server listening on port : 5000');
})