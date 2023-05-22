import { useQueryClient } from '@tanstack/react-query'
import { useDeleteWorkout } from '../hooks/useWorkouts'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { BsTrash } from 'react-icons/bs'

type WorkoutDetailProps = {
  workout: Workout
  isLoading: boolean
}

export const WorkoutDetail = ({ workout, isLoading }: WorkoutDetailProps) => {
  const queryClient = useQueryClient()
  const mutationDelete = useDeleteWorkout(queryClient)

  const handleDelete = (id: string) => {
    mutationDelete.mutate(id)
  }

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
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={() => handleDelete(workout._id)}>
        <BsTrash />
      </span>
    </div>
  )
}
