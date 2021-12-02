require('./mongo')     //Execute the information the package mongo.js and connected the database
const express = require('express')
const cors = require('cors')  //Middleware
const app = express()

// app.use(cors())                to enable cross-domain communication with browser apps of different origins (default * all origin)
app.use(express.json(), cors())

// const Drone = require('./models/Drone')     //Import Drone
// const Medication = require('./models/Medication')     //Import Drone

app.get('/', (request, response) => {
    response.send('Drone')
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})