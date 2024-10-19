import { GetDrivers } from '@/api/FetchF1Data'
import DriversCurrentStatus from '@/components/fragments/CurrentStatus'
import DriverStandingCard from '@/components/layout/DriverStandingCard'
import { DriverProps } from '@/types/f1Types'
import React from 'react'

const DriverStandings = async () => {

  const standings: DriverProps[] = await GetDrivers()

  return (
    <main className="flex flex-col w-full min-h-screen">
      <article className="flex flex-col gap-4 mt-4">
        <h1 className="text-3xl">F1 2024 Driver Standings</h1>
        <DriversCurrentStatus />
      </article>
      <article className="flex flex-col gap-y-8 py-6">
        {standings.map((driver, index) => {
          return <DriverStandingCard driver={driver} key={index} />;
        })}
      </article>
    </main>
  );
}

export default DriverStandings