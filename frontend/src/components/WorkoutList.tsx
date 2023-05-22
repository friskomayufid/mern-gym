import React, { useState } from 'react'
import { useWorkout } from '../hooks/useWorkouts'
import { WorkoutDetail } from './WorkoutDetail'

export const WorkoutList = () => {
  const [postCount] = useState(10)
  const { data, isLoading } = useWorkout(postCount)

  if (isLoading) return <div>Loading..</div>

  return (
    <div className="workouts">
      {data?.data.map((workout: Workout) => (
        <WorkoutDetail
          key={workout._id}
          workout={workout}
          isLoading={isLoading}
        />
      ))}
    </div>
  )
}
