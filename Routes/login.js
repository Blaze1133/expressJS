const express = require('express');
const app = express();
const router = express.Router();

router.get('/:name', (req, res) => {
    const {name} = req.params;
    if(!name){
        res.status(404).send('Please provide name');
    }else{
        res.status(200).send(`Welcome ${name}`);
    }
});

module.exports = router;