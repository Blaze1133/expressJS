const express = require('express');
const app = express();
const apiRouter  = require('./Routes/api');

app.use(express.json());
app.use('/api',apiRouter);

app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});
