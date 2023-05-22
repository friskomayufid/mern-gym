import React, { ReactElement } from 'react'
import Link from 'next/link'

function Navbar(): ReactElement {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
