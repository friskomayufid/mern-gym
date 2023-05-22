import { useQuery, useMutation, QueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const fetchWorkouts = async (limit = 10) => {
  const data = await axios.get('http://localhost:4000/api/workouts')
  return data
}

export const useWorkout = (limit: number | undefined) => {
  return useQuery({
    queryKey: ['workouts', limit],
    queryFn: () => fetchWorkouts(limit),
    staleTime: 60000,
  })
}

export const useSendWorkout = (queryClient: QueryClient) => {
  return useMutation({
    mutationFn: (newWorkout: WorkoutForm) => {
      return axios.post('http://localhost:4000/api/workouts', newWorkout)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] })
    },
  })
}

export const useDeleteWorkout = (queryClient: QueryClient) => {
  return useMutation({
    mutationFn: (id: string) => {
      return axios.delete(`http://localhost:4000/api/workouts/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] })
    },
  })
}
