import { Request, Response } from 'express';
import Workout from "../model/workoutModel"
import mongoose from "mongoose"

export const getWorkouts = async (req: Request, res: Response) => {
  try {
    const workout = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
  } catch(error: any) {
    res.status(400).json({error: error.message})
  }
}

export const getWorkout = async (req: Request, res: Response) => {
  const {id} = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
      return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
  } catch(error: any) {
    res.status(400).json({error: error.message})
  }
}

export const createWorkout = async (req: Request, res: Response) => {
  const {title, load, reps} = req.body

  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch(error: any) {
    res.status(400).json({error : error.message})
  }
}

export const deleteWorkout = async (req: Request, res: Response) => {
  const {id} = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
      return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
  } catch(error: any) {
    res.status(400).json({error: error.message})
  }
}

export const updateWorkout = async (req: Request, res: Response) => {
  const {id} = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findByIdAndUpdate({_id: id}, {
      ...req.body
    })

    if (!workout) {
      return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
  } catch(error: any) {
    res.status(400).json({error: error.message})
  }
}
