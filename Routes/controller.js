const express = require('express');
const app = express();

const getRequest = (req, res) => {
    res.send(`Hello  ${req.params.name} from get request`);
}

const putRequest = (req, res) => {
    const {name} = req.body();
    if(!name){
        res.status(400).send('Please provide name value');
    }
    res.status(200).send(`Welcome ${name} from put request`);
}

module.exports = {getRequest,putRequest};