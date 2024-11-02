"use client";

import { GetResults } from "@/api/FetchF1Data";
import ordinalSufixByPosition from "@/utils/ordinalSufix";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "date-fns";
import { useParams } from "next/navigation";
import React from "react";

const RaceResultsData = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["race-results"],
    // @ts-expect-error some mismatch here
    queryFn: () => GetResults(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const formatPoints = (points: string) => {
    if (points === "1") {
      return `+${points}pt`;
    }
    return `+${points}pts`;
  };

  return (
    <main className="p-8">
      <article className="flex flex-col items-center justify-center w-[50rem] max-w-[95dvw] bg-gray-800 gap-4 rounded-lg overflow-hidden">
        <header className="flex flex-col items-center justify-between w-full bg-gray-900 border-2 border-blood-800 rounded-t-lg p-2 gap-2">
          <section className="flex justify-between w-full text-2xl flex-wrap">
            <h1 className="">Results of {data.raceName}</h1>
            <span>{formatDate(data.date, "MMM/dd/yyyy")}</span>
          </section>
          <section className="flex flex-col md:flex-row items-start gap-2 justify-between w-full rounded-lg text-lg font-medium">
            <div className="border-l-4 border-purple-800 px-2 bg-gray-900 rounded-r-md">
              Fastest Lap
            </div>
            <div className="border-l-4 px-2 bg-gray-900 rounded-r-md">
              DNF: Not Finished
            </div>
            <div className="border-l-4 px-2 bg-gray-900 rounded-r-md">
              DSQ: Disqualified
            </div>
          </section>
        </header>
        <article className="w-full">
          <ol className="flex flex-col gap-2 p-2">
            {/* @ts-expect-error i will fix it soon as possible, just for now */}
            {data.Results.map((driver, index) => {
              const formatStatus = (status: string) => {
                if (
                  status !== "+1 Lap" &&
                  status !== "+2 Laps" &&
                  status !== "+3 Laps" &&
                  status !== "Disqualified" &&
                  status !== "DNS" &&
                  !driver.Time?.time
                ) {
                  return "DNF";
                } else if (status === "Disqualified") {
                  return "DSQ";
                }
                return driver.Time?.time || status;
              };

              return (
                <li
                  key={index}
                  className="w-full bg-gray-900 flex flex-wrap items-center justify-between p-2 gap-4 text-xl border-2 rounded-lg hover:bg-gray-950 transition-default"
                  style={{
                    borderColor:
                      driver.FastestLap?.rank === "1"
                        ? "purple"
                        : "transparent",
                  }}
                >
                  <div className="flex gap-2 flex-1 items-center justify-between md:justify-start font-semibold">
                    <h1 className="text-blood-500">
                      {ordinalSufixByPosition(driver.position)}
                    </h1>
                    <span className="hidden md:block">-</span>
                    <div className="flex gap-1">
                      <h2>{driver.Driver.givenName} </h2>
                      <h2 className="uppercase">{driver.Driver.familyName} </h2>
                    </div>
                    <h2 className="uppercase font-bold ml-1 text-2xl hidden md:block">
                      {driver.number}{" "}
                    </h2>
                  </div>
                  <div className=" flex flex-1 gap-4 justify-between">
                    <h3 className="text-gray-300">
                      {formatPoints(driver.points)}{" "}
                    </h3>
                    <h2 className="flex m-auto font-medium">
                      {driver.Constructor.name}
                    </h2>
                    <p className="flex justify-end">
                      {formatStatus(driver.status) || driver.Time?.time}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </article>
      </article>
    </main>
  );
};

export default RaceResultsData;
