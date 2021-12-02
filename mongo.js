const mongoose = require('mongoose')
const password = require('./password.js')
const connectionString = `mongodb+srv://hime:${password}@clusterdrone.peknx.mongodb.net/apidrone?retryWrites=true&w=majority`

//Connexion to mongoDB
mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected')
  }).catch(err => {
    console.error(err)
})




