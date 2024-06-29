const express = require('express');
const app = express();;
const path = require('path');

app.use(express.static('./public'));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./Calculator/index.html'))
});

app.all('*', (req, res) => {
    res.status(404).send("Resource not found")
});

app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});