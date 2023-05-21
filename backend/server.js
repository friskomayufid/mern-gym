require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

const app = express()

// middleware
app.use(express.json())

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to db & server started on port 4000');
    });
  })
  .catch((error) => {
    console.log(error)
  })
