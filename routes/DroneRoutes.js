const mongoose = require('mongoose')
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

//TODO - check drone battery level for a given drone
routes.get('/drones/:id', (request, response) => {
  const {id} = request.params
  Drone.findById(id)
    .then(result => {
      response.json({
        batteryCapacity: `${result.batteryCapacity}%`
      })
    }).catch(error => {
    response.json(error);
  })
})

//TODO - checking available drones for loading
routes.get('/dronesstate', (request, response) => {
  Drone.find({state: 'IDLE'})
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

  if (batteryCapacity > 100){
    response.status(406).json({
      success: false,
      error: "error"
    })
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