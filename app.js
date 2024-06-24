const http = require('http');

const server = http.createServer((req,res) =>{
    const url = req.url
    if(url === '/'){
        console.log(req.method)
        res.writeHead(200,{'Content-type': 'text/html'})
        res.write('<h1>HOME PAGE</h1>')
        res.end();
    }
    else if(url === '/about'){
        res.writeHead(200,{'Content-type': 'text/html'})
        res.write('<h1>ABOUT PAGE</h1>')
        res.end();
    }
    else{
        res.writeHead(400,{'Content-type': 'text/html'})
        res.write('<h1>PAGE NOT FOUND </h1>')
        res.end();
    }
})
server.listen(5000);