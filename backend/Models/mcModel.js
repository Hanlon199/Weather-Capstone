const mongoose = require('mongoose');

const mcSchema = new mongoose.Schema({
  timeStamp: String,
  latitude: Number,
  longitude: Number,
  altitude: Number,
  solar: Number,
  airTemp: Number,
  barometer: Number,
  windSpeed: Number,
  windDirection: Number,
  windChill: Number,
  dewPoint: Number
});
// rainfall?
module.exports = new mongoose.model('MCDataSchema', mcSchema);
