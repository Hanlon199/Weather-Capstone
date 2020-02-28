const axios = require('axios');

const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const assert = require('assert');
const router = express.Router();
var url = 'mongodb://localhost:27017/mcweather';
const MCDataSchema = require('../Models/mcModel');

mongoose.connect(url, {
  useNewUrlParser: true
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection.error'));
db.on('open', function () {
  console.log('Connected to database');
});

router
  .get('/get-data', (req, res, next) => {
    MCDataSchema.find()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
    // res.send('getdata');
    // setTimeout(async () => {
    //   mongo.connect(url, (req, res, next) => {
    //     assert.equal(null, err);
    //     var cursor = db.collection('mountcarmel').find();
    //     cursor.forEach((doc, err) => {
    //       assert.equal(null, err);
    //       resultArray.push(doc);
    //     }, () => {
    //       db.close();
    //       // render the data to the graphs below perhaps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ,,
    //     })
    //   })
    // }, 5000)
  })
  // .post('/insert', async (req, res, next) => {
  //   try {
  //     let serverData = await axios.get(`/api/main/load-all/mount_carmel`);

  //     mongo.connect(url, (err, db) => {
  //       assert.equal(null, err);
  //       db.collection('mountcarmel').insertOne(serverData, function (err) {
  //         assert.equal(null, err);
  //         console.log('item inserted');
  //         db.close();
  //       })
  //     })
  //   } catch (err) {
  //     next(err);
  //   }
  // });
  // .post('/insert', async (req, res, next) => {
  //   try {
  //     // let serverData = await axios.get(`/api/main/load-all/mount_carmel`);
  //     let mcDataObj = req.body;
  //     MCDataSchema.create(mcDataObj, (err, mcData) => {
  //       if (err) {
  //         console.log(err);
  //         res.sendStatus(500);
  //       }
  //       res.sendStatus(201)
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // });
  .post('/insert', (req, res, next) => {
    // let serverData = await axios.get(`/api/main/load-all/mount_carmel`);
    let mcDataObj = req.body;
    MCDataSchema.create(mcDataObj, (err, mcData) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.sendStatus(201)
    });
  });
// let serverData = await axios.get(`/api/main/load-all/mount_carmel`);

// // let mcDataObj = req.body;
// MCDataSchema.create(serverData, (err, mcData) => {
//   if (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
//   res.sendStatus(201);

// res.send('insertdata');
// let serverData = axios.get(`/api/main/load-all/mount_carmel`);
// setTimeout(async () => {
//   mongo.connect(url, (err, db) => {
//     assert.equal(null, err);
//     var serverData = loadData();
//     console.log('serverData', serverData);
//     db.collection('mountcarmel').insertOne(serverData, function(err) {
//       assert.equal(null, err);
//       console.log('item inserted');
//       db.close();
//     });
//   });
// }, 5000);
// });

const loadData = async () => {
  return (serverData = axios.get(`/api/main/load-all/mount_carmel`));
};

module.exports = router;