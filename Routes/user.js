const express = require('express');
const app = express();
const router = express.Router();
const {getRequest,putRequest} = require('./controller');

router.get('/:name',getRequest); // here the call back function is written in another file, for readability
router.put('/', putRequest);

module.exports = router;