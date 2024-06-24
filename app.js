const http = require('http');

const server = http.createServer((req,res) =>{
    res.writeHead(200,'content-type: text/html')
    res.write('<h1>HELLO WORLD</h1>')
    res.end();

})
s
server.listen(5000);