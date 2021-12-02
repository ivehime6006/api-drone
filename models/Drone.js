const mongoose = require('mongoose')
const Schema = mongoose.Schema

//SchemaType for Drone
const droneSchema = new Schema({
  // serialNumber: String,     //Schema
  serialNumber: {type: String},
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
})

// const Drone = mongoose.model('Drone', droneSchema)
// module.exports = Drone
  module.exports = mongoose.model('Drone', droneSchema)