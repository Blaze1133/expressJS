const express = require('express');
const app = express();
const {people} = require('./data');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./methods-public'));


app.get('/api', (req,res) =>{
    res.json(people);
})

app.post('/login-user', (req, res) => {
    const{username,password} = req.body;

    res.send(`Entered user name is ${username} and password is ${password}`);
      
  });

app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});