import { GetConstructorStandings } from '@/api/FetchF1Data'
import React from 'react'

const ConstructorStandings = async () => {
  const standings = await GetConstructorStandings()

  return (
    <main className='flex flex-col w-full min-h-screen'>ConstructorStandings</main>
  )
}

export default ConstructorStandings