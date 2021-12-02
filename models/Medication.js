const mongoose = require('mongoose')
const Schema = mongoose.Schema

//SchemaType for Medication
const medicationSchema = new Schema({
  name: {type: String},
  weight: {type: Number},
  code: {type: String},
  image: {type: Number},
})

  module.exports = mongoose.model('Medication', medicationSchema)