const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema for History
const batteryHistorySchema = new Schema({
  droneId: Schema.Types.ObjectId,
  batteryLevel: Number
})

 module.exports = mongoose.model('History', batteryHistorySchema)