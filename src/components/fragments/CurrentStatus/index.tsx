import React from 'react'

const DriversCurrentStatus = () => {
  return (
    <section className="flex gap-4 flex-col md:flex-row">
        <span className="border-l-4 border-l-green-500 rounded-sm text-lg font-medium px-1">Current Regular Drivers</span>
        <span className="border-l-4 border-l-red-500 rounded-sm text-lg font-medium px-1">Replaced drivers</span>
        <span className="border-l-4 border-l-gray-500 rounded-sm text-lg font-medium px-1">Non regular drivers</span>
    </section>
  )
}

export default DriversCurrentStatus