const express = require('express');
const app = express();
const apiRouter  = require('./Routes/api'); //importing the api route

app.use(express.json());
app.use('/api',apiRouter);

const logRouter = require('./Routes/login');
app.use('/login',logRouter);

app.listen(5000, () => {
    console.log(`Server started on port 5000`)});