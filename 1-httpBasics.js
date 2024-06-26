const express = require('express');
const app = express();
console.log(app);

app.get('/', (req, res) => {
    console.log("User hit the resource");
    res.send("This is Home Page");
});

app.get('/about', (req, res) => {
    res.status(200).send("ABOUT PAGE")
});

app.all('*',(req,res) =>{
    res.status(404).send('<h1>Resource not found</h1>')
})
app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});