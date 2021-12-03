const Drone = require('./models/Drone');

module.exports = {
  create: (request, response) => {
    let drone = new Drone({
      serialNumber: request.body.serialNumber,
      model: request.body.model,
      weightLimit: request.body.weightLimit,
      batteryCapacity: request.body.batteryCapacity,
      state: request.body.state
    });

    drone.save()
      .then(result => {
        response.json({ success: true, result: result });
      }).catch(error => {
        response.json({ success:false, result:error });
    });
  }
}