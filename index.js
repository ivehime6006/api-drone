const express = require('express')
const app = express()

// const http = require('http')
//
// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     response.end('Drone')
// })

app.get('/', (request, response) => {
    response.send('Drone')
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})