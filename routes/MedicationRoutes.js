const routes = require('express').Router()
const Medication = require('../models/Medication.js')

routes.get('/medication', (request, response) => {
  Medication.find({})
    .then(result => {
      response.json(result)
    }).catch(error => {
    response.json(error);
  })
})


routes.post('/medication', (request, response) => {
  const {name, weight, code, image} = request.body

  let nameVerification = new RegExp(/^[A-Za-z][A-Za-z0-9_-]*$/);
  // console.log(nameVerification.test("anca-las_te0"))
  // console.log(nameVerification.test("7ancalaste"))

  let codeVerification = new RegExp(/^[A-Z0-9_]*$/);
  // console.log(codeVerification.test("ABC_245"))
  // console.log(codeVerification.test("aBC25"))

  if (!nameVerification.test(name)) {
    response.status(417).json({
      success: false,
      error: "Incorrect name"
    })
    return
  }
    if (!codeVerification.test(code)) {
      response.status(417).json({
        success: false,
        error: "Incorrect code"
      })
    return
  }


  const medication = new Medication({
    name,
    weight,
    code,
    image
  })

  medication.save()
    .then(result => {
      response.json(result);
    }).catch(error => {
    response.json(error);
  });
})


module.exports = routes;

