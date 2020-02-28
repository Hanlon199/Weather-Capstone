const mongoose = require('mongoose');

const mcSchema = new mongoose.Schema({
  stationID: Number,
  timeStamp: String,
  recordNumber: Number,
  saveSite: Number,
  latitude: Number,
  longitude: Number,
  altitude: Number,
  solar: Number,
  airTemp: Number,
  rh: Number,
  barometer: Number,
  windSpeed: Number,
  windDirection: Number,
  rainYearly: Number,
  dailyETO: Number,
  dailyTempMax: Number,
  dailyTempMin: Number,
  windChill: Number,
  dewPoint: Number,
  dailyWSMax: Number,
});
// rainfall?
module.exports = new mongoose.model('MCDataSchema', mcSchema);