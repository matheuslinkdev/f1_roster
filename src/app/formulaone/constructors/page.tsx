import { GetConstructors } from '@/api/FetchF1Data'
import { ConstructorProps } from '@/types/f1Types'
import React from 'react'

const Constructors = async () => {
  const constructors: ConstructorProps[] = await GetConstructors()

  return (
    <main className='flex flex-col w-full min-h-screen'>{constructors.map((constructor)=>{
      return(
        <h1>{constructor.name}</h1>
      )
    })}</main>
  )
}

export default Constructors