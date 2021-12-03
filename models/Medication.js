const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema for Medication
const medicationSchema = new Schema({
  name: String,
  weight: Number,
  code: String,
  image: String,
})

  module.exports = mongoose.model('Medication', medicationSchema)