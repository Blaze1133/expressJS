const express = require('express');
const app = express();
const apiRouter  = require('./Routes/api'); //importing the api route

app.use(express.json());
app.use('/api',apiRouter);

const logRouter = require('./Routes/login');
app.use('/login',logRouter);

const userRouter = require('./Routes/user');
app.use('/user',userRouter);

app.listen(5000, () => {
    console.log(`Server started on port 5000`)});