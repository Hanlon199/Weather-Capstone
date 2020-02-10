const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
// require('dotenv').cofig();

const app = express();
const port = 5000;

// ROUTES //
const index = require('./routes/index');
const mcRoutes = require('./routes/mc.route');
const yhRoutes = require('./routes/yh.route')

app.use(bodyParser.json());
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
    .use(bodyParser.urlencoded({
        extended: false
    }))
    .use(bodyParser.json())
    .use('/api', index)
    .use('/api', mcRoutes)
    // .use('/api/YH', yhRoutes)
    .get('*', (req, res) => res.status(404).json({
        error: true,
        result: 'Route not found'
    }))
    .listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })