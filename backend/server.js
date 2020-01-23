const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
// require('dotenv').cofig();

const app = express();
const port = 5000;

/*
    .use(
        '/api',
        proxy({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    )
*/
// .use(cors())
// .use(express.static('../src/dist/qu-weather'))
app
    .use(morgan('dev'))
    .use(bodyParser.urlencoded({extended:false}))
    .use(bodyParser.json())
    .use('/api', require('./routes/index'))
    .get('*', (req,res)=>res.status(404).json({error:true, result: 'Route not found'}))
    .listen(port,()=>{console.log(`Server listening on port ${port}`)})