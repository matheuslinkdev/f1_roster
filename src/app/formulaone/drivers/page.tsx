import { GetDrivers } from "@/api/FetchF1Data";
import DriversCurrentStatus from "@/components/fragments/CurrentStatus";
import DriverCard from "@/components/layout/DriverCard";
import { DriverProps } from "@/types/f1Types";
import React from "react";

const Drivers = async () => {
  const drivers: DriverProps[] = await GetDrivers();

  const sortedDrivers = [...drivers].sort((a, b) => {
    if (a.team < b.team) return -1;
    if (a.team > b.team) return 1;
    return 0;
  });

  return (
    <main className="flex flex-col w-full min-h-screen">
      <article className="flex flex-col gap-4 mt-4">
        <h1 className="text-3xl">Formula 1 Drivers of 2024</h1>
        <DriversCurrentStatus />
      </article>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 py-6">
        {sortedDrivers.map((driver, index) => {
          return <DriverCard driver={driver} key={index} />;
        })}
      </article>
    </main>
  );
};

export default Drivers;
