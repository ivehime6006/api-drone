const mongoose = require('mongoose')
const Schema = mongoose.Schema

//SchemaType for Drone
const droneSchema = new Schema({
  serialNumber: {
    type: String,
    maxlength: 100
  },
  model: {
    type: String,
    enum: ["Lightweight", "Middleweight", "Cruiserweight", "Heavyweight"]
  },
  weightLimit: Number,
  batteryCapacity: Number,
  state: {
    type: String,
    enum: ["IDLE", "LOADING", "LOADED", "DELIVERING", "DELIVERED", "RETURNING"]
  },
  medication: [{
    type: Schema.Types.ObjectID,
    ref: 'Medication'
  }]
})

  module.exports = mongoose.model('Drone', droneSchema)