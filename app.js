const express = require("express");
const app = express();
const {people} = require('./data');

app.use(express.urlencoded({extended:false}));
app.use(express.static('./methods-public'));

app.get('/api', (req, res) => {
    res.status(200).json({sucess:true,data:people});   
});

app.post('/login-user', (req, res) => {
    const {username,password} = req.body;

    res.send(`You have entered the username:${username} with a password of ${password}`);
});


app.listen(5000,(req,res) =>{
    console.log("Listening on port number 5000");
});