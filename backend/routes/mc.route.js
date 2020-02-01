import axios from 'axios';

const express = require('express');
const mongo = require('mongodb');
const assert = require('assert');
const router = express.Router();
var url = 'mongodb://localhost:27017/mcweather';

router.get('/get-data', (req, res, next) => {
    setTimeout(async () => {
      mongo.connect(url, (req, res, next) => {
        assert.equal(null, err);
        var cursor = db.collection('mountcarmel').find();
        cursor.forEach((doc, err) => {
          assert.equal(null, err);
          resultArray.push(doc);
        }, () => {
          db.close();
          // render the data to the graphs below perhaps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ,,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        })
      })
    }, 5000)
  })
  .post('/insert', (req, res, next) => {
    let serverData = await axios.get(`/api/main/load-all/mount_carmel`);

    mongo.connect(url, (err, db) => {
      assert.equal(null, err);
      db.collection('mountcarmel').insertOne(serverData, function (err) {
        assert.equal(null, err);
        console.log('item inserted');
        db.close();
      })
    })
  });