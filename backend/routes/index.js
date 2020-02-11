const express = require('express');
const routeManager = express.Router();

routeManager
    .use('/main', require('./main'));

module.exports = routeManager;