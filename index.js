const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
console.log(process.env.MONGO_URI)
mongoose.connect(`${process.env.MONGO_URI}/commonauth`).then(() => {
    console.log('Mongoose connected successfully')
}).catch(error => console.log(error))

app.use(cors())
app.use(express.json())

app.use('/v1', require('./routes'))

app.listen(3000, () => {
    console.log(`Server listening at ${3000}`);
})