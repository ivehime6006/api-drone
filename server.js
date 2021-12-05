require('./mongo')     //Execute the information the package mongo.js and connected the database
const express = require('express')
const cors = require('cors')
const app = express()
const DroneRoutes = require('./routes/DroneRoutes.js')
const MedicationRoutes = require('./routes/MedicationRoutes.js')
const Drone = require('./models/Drone.js')
const History = require('./models/BatteryHistory.js')

//A periodic task to check drones battery levels
setInterval(() => {
    Drone.find({})
      .then(result => {
          result.forEach(elemt => {
              const history = new History({
                droneId: elemt._id,
                batteryLevel: elemt.batteryCapacity
              })
            history.save().then(historySave => {
              console.log(historySave)
            }).catch(error => {
              console.log(error)
            })
          })
      }).catch(error => {
      console.log(error)
    })
}, 1000*60*60)


//Middleware
//To enable cross-domain communication with browser apps of different origins (default * all origin)
app.use(express.json(), cors())


//Routes
app.get('/', (request, response) => {
    response.send('Drone')
})

app.use('/api', DroneRoutes);
app.use('/api', MedicationRoutes);


const PORT = 3002

//Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})