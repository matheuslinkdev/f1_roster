import React from "react";
import ConstructorsStandingsData from "./standings";

const ConstructorStandings = async () => {
  return (
    <main className="flex flex-col w-full min-h-screen gap-6 p-8">
      <article className="flex flex-col gap-4 mt-4">
        <h1 className="text-2xl md:text-3xl">
          Formula 1 2024 Constructor Standings
        </h1>
      </article>
      <article className="flex flex-col justify-center items-center gap-8">
        <ConstructorsStandingsData />
      </article>
    </main>
  );
};

export default ConstructorStandings;
