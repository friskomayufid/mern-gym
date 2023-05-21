import express, { Router } from "express"
import { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } from "../controllers/workoutController"

const router: Router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

export default router