const mongoose = require('mongoose')
const password = require('./password.js')
const connectionString = `mongodb+srv://hime:${password}@apidrone.w53h0.mongodb.net/apidrone`

//Connexion to MongoDB
mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected')
  }).catch(err => {
    console.error(err)
})





