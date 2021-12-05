const routes = require('express').Router()
const Drone = require('../models/Drone.js')
const Medication = require('../models/Medication.js')

routes.get('/drones', (request, response) => {
  Drone.find({})
    .then(result => {
      response.json(result)
    }).catch(error => {
    response.json(error);
  })
})


//Check drone battery level for a given drone
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


//Checking available drones for loading
routes.get('/dronesstate', (request, response) => {
  Drone.find({state: 'IDLE'})
    .then(result => {
      response.json(result)
    }).catch(error => {
    response.json(error);
  })
})


routes.put('/dronesstate/:id', (request, response) => {
  const {id} = request.params
  const {state} = request.body
  Drone.findById(id)
    .then(result => {
      if (state === "LOADING" && result.batteryCapacity < 25){
        response.json({
          success: false,
          error: "Battery low"
        })
        return
      }
      const newDrone = {
        state
      }
      Drone.findByIdAndUpdate(id, newDrone, { new: true})
        .then(element => {
          response.json(element)
        })
    }).catch(error => {
    response.json(error)
  })
})



//Loading a drone with medication items
routes.put('/drone/:id', async (request, response) => {
  const droneId = request.params.id
  const {medicationId, weightToLoad} = request.body

  try {
    const searchMedication = await Medication.findById(medicationId)
    const updateDrone = await Drone.findById(droneId)
    if(weightToLoad > searchMedication.weight) {
      response.json({
        success: false,
        error: "The weight is out of range"
      })
      return
    }
    const totalWeightDrone = weightToLoad + updateDrone.weightLimit
    const totalWeightMedication = searchMedication.weight - weightToLoad

    //This should never have happen ... but nobody knows ...
    if (updateDrone.batteryCapacity < 25) {
      response.json({
          success: false,
          error: "Battery low"
        }
      )
      return
    }

    if (totalWeightDrone < 500) {
      updateDrone.medication = await updateDrone.medication.concat(medicationId)
      updateDrone.weightLimit = totalWeightDrone
      const finalDrone = await updateDrone.save()
      searchMedication.weight = totalWeightMedication
      await searchMedication.save()
      response.json(finalDrone)
    } else {
      response.json({
        success: false,
        error: "The drone has a weight limit to 500gr"
      })
    }
  }catch (error) {
    response.json(error)
    console.log(error)
  }
})


//Checking loaded medication items for a given drone
routes.get('/drones/:id', (request, response) => {
  const {id} = request.params
  Drone.findById(id)
    .populate("medication",
      {
        name: 1,
        weight: 1,
        code: 1,
        image: 1
      })
    .then(result => {
      response.json({
        result
      })
    }).catch(error => {
    response.json(error);
  })
})


//Registering a drone
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





