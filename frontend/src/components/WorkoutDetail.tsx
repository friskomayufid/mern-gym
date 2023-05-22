import React, { useState } from 'react'
import { usePosts } from '../hooks/useWorkouts'

type WorkoutDetailProps = {
  workout: Workout
  isLoading: boolean
}

export const WorkoutDetail = ({ workout, isLoading }: WorkoutDetailProps) => {
  if (isLoading) return <div>Loading..</div>

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <b>Load (kg): </b>
        {workout.load}
      </p>
      <p>
        <b>Reps (kg): </b>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  )
}
