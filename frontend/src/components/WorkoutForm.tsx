import React, { ReactElement, useState } from 'react'
import { useSendWorkout } from '@/hooks/useWorkouts'
import { useForm } from 'react-hook-form'
import { useQueryClient } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const workoutSchema = yup.object({
  title: yup.string().required(),
  load: yup.number().positive().integer().required(),
  reps: yup.number().positive().integer().required(),
})

function WorkoutForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(workoutSchema),
  })
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
      <h3>Add a New Workout</h3>
      <input {...register('title', { required: true })} placeholder="Title" />
      {errors.title && (
        <p className="error">{errors.title.message?.toString()}</p>
      )}
      <input {...register('load', { required: true })} placeholder="Load" />
      {errors.load && (
        <p className="error">{errors.load.message?.toString()}</p>
      )}
      <input {...register('reps', { required: true })} placeholder="Reps" />
      {errors.reps && (
        <p className="error">{errors.reps.message?.toString()}</p>
      )}
      <button type="submit">Submit</button>
      {mutation.isError ? (
        <p className="error">An error occurred: Something went wrong</p>
      ) : null}
    </form>
  )
}

export default WorkoutForm
