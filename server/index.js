const express = require("express")
const cors = require("cors")
const ctrl = require('./controller.js')

const app = express() 
app.use(express.json())
app.use(cors())


app.get('/api/houses', ctrl.getAllHouses)

app.delete('/api/houses/:id', ctrl.deleteHouse)

app.post('/api/houses', ctrl.createHouse)

app.put('/api/houses/:id', ctrl.updateHouse)


app.listen(4004, () => console.log('Take us to warp 4004!'))