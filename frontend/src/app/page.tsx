'use client'

import React, { ReactElement } from 'react'
import { WorkoutList } from '@/components/WorkoutList'
import WorkoutForm from '@/components/WorkoutForm'

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <div className="home">
      <WorkoutList />
      <WorkoutForm />
    </div>
  )
}

export default Home
