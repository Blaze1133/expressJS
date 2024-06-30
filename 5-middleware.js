const express = require('express');
const app = express();
const authorize = require('./authorize')

function logger(req,res,next){
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use([logger,authorize]);
app.get('/',(req,res) =>{
    res.send("Home Page");
    console.log(req.user);
})

app.get('/about',(req,res) =>{
    res.send("About");
})

app.listen(5000,(req,res) =>{
    console.log("Listening on port 5000");
})