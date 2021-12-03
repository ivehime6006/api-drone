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
})

  droneSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.batteryCapacity = `${returnedObject.batteryCapacity}%`
    }
  })

  module.exports = mongoose.model('Drone', droneSchema)