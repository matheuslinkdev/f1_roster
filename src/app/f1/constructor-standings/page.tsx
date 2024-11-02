import React from 'react'
import ConstructorsStandingsData from './standings';

const ConstructorStandings = async () => {

  return (
    <main className="flex flex-col w-full min-h-screen py-8">
      <article className="flex flex-col gap-4 my-4">
        <h1 className="text-3xl">Formula 1 2024 Constructor Standings</h1>
      </article>
      <article className="flex flex-col justify-center items-center gap-8">
        <ConstructorsStandingsData />
      </article>
    </main>
  );
}

export default ConstructorStandings