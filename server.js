require('./mongo')     //Execute the information the package mongo.js and connected the database
const express = require('express')
const cors = require('cors')
const app = express()
const DroneRoutes = require('./routes/DroneRoutes.js')
const MedicationRoutes = require('./routes/MedicationRoutes.js')

//TODO - Middleware
//To enable cross-domain communication with browser apps of different origins (default * all origin)
app.use(express.json(), cors())

// //TODO - Controllers
// const Drone = require('./models/Drone')
// const Medication = require('./models/Medication')


//TODO - Routes
app.get('/', (request, response) => {
    response.send('Drone')
})

app.use('/api', DroneRoutes);
app.use('/api', MedicationRoutes);


const PORT = 3003

//TODO - Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})