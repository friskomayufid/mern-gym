import React, { ReactElement, useState } from 'react'
import { useSendWorkout } from '@/hooks/useWorkouts'
import { useForm } from 'react-hook-form'
import { useQueryClient } from '@tanstack/react-query'

function WorkoutForm(): ReactElement {
  const { register, handleSubmit } = useForm()
  const [data] = useState('')
  const queryClient = useQueryClient()

  const mutation = useSendWorkout(queryClient)

  if (mutation.isLoading) {
    return <p>Adding workout..</p>
  }

  return (
    <form
      onSubmit={handleSubmit((data) =>
        mutation.mutate({ title: data.title, reps: data.reps, load: data.load })
      )}
    >
      {mutation.isError ? (
        <div>An error occurred: Something went wrong</div>
      ) : null}

      {mutation.isSuccess ? <div>Todo added!</div> : null}

      <h3>Add a New Workout</h3>
      <input {...register('title', { required: true })} placeholder="Title" />
      <input {...register('load', { required: true })} placeholder="Load" />
      <input {...register('reps', { required: true })} placeholder="Reps" />
      <p>{data}</p>
      <button type="submit">Submit</button>
    </form>
  )
}

export default WorkoutForm
