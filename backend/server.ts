require('dotenv').config()
import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose"
import workoutRoutes from "./routes/workout"

dotenv.config();
const app: Application = express()
const MONGO_URI = process.env.MONGO_URI?.toString() || '5000'
app.use(express.json())

app.use('/api/workouts', workoutRoutes)

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to db & server started on port 4000');
    });
  })
  .catch((error) => {
    console.log(error)
  })
