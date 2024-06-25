const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./Calculator/index.html'); 
const CSSPage = readFileSync('./Calculator/style.css'); 
const JSPage = readFileSync('./Calculator/script.js'); 


const server = http.createServer((req,res) =>{
    const url = req.url
    console.log(url)
    if(url === '/'){
        console.log(req.method)
        res.writeHead(200,{'Content-type': 'text/html'})
        res.write(homePage)
        res.end();
    }
    else if(url === '/style.css'){
        res.writeHead(200,{'Content-type': 'text/css'})
        res.write(CSSPage)
        res.end();
    }
    else if(url === '/script.js'){
        res.writeHead(200,{'Content-type': 'text/javascript'})
        res.write(JSPage)
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