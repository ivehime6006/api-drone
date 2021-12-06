const mongoose = require('mongoose')
const supertest = require('supertest')
const {app, serverInit} = require('../server.js')
const api = supertest(app)


test('drone are returned as json',async () => {
   await api
     .get('/api/drones')
     .expect(200)
     .expect('Content-Type', /application\/json/)
})

afterAll(async () => {
  mongoose.connections.forEach(e => {
    e.close()
  })
  await serverInit.close()
})


