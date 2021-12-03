const routes = require('express').Router()
const Drone = require('../models/Drone.js')

routes.get('/drones', (request, response) => {
  Drone.find({})
    .then(result => {
      response.json(result)
    }).catch(error => {
      response.json(error);
  })
})

routes.post('/drone', (request, response) => {
  const {serialNumber, model, weightLimit, batteryCapacity, state} = request.body
  if(weightLimit > 500){
    response.status(406).json({
      success: false,
      error: "The weight limit is 500gr"
    })
    return
  }


  const drone = new Drone({
    serialNumber,
    model,
    weightLimit,
    batteryCapacity,
    state
  })

  drone.save()
    .then(result => {
      response.json(result);
    }).catch(error => {
    response.json(error);
  });
})

module.exports = routes;