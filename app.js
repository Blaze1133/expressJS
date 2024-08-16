const express = require('express');
const app = express();

//const {people} = require('./data');

const logRouter = require('./Routes/log');
app.use('/log',logRouter);
const apiRouter  = require('./Routes/api');
app.use('/api',apiRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('./methods-public'));


app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});
