const express = require('express');
const routeManger = express.Router();

routeManger
    .use('/main', require('./main'))

module.exports = routeManger;