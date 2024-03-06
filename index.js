const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27013/commonauth').then(() => {
    console.log('Mongoose connected successfully')
}).catch(error => console.log(error))

app.use(cors())
app.use(express.json())

app.use('/', require('./routes'))

app.listen(4329, () => {
    console.log(`Server listening at ${4329}`);
})