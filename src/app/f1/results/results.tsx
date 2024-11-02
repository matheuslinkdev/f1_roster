"use client";

import { GetSchedule } from "@/api/FetchF1Data";
import { getCountryCode } from "@/utils/countryFlag";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const date = new Date();
const today = formatDate(date, "MM/dd/yyyy");

export default function F1Results() {
  const { data, error, isFetched } = useQuery({
    queryKey: ["schedule"],
    queryFn: GetSchedule,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  if (error) return <h2>Error: {error.message}</h2>;
  if (!isFetched) return <div>Loading...</div>;

  return (
    <article className="flex flex-col gap-6 p-8">
      {/* @ts-expect-error some confuse types, i will fix it soon as possible */}
      {data.map((race, index) => {
        const formattedRaceDay = formatDate(race.date, "MM/dd/yyyy");
        const isPast = formattedRaceDay < today;
        const country = race.Circuit.Location.country;
        const formattedCountry = getCountryCode(country);

        if (isPast) {
          return (
            <section key={index} className="flex">
              <Link
                href={`/f1/results/${index + 1}`}
                className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 w-[45rem] max-w-[90dvw] bg-gray-900 p-2 rounded-lg hover:bg-gray-800 transition-default"
              >
                <Image
                  src={`https://flagicons.lipis.dev/flags/4x3/${formattedCountry}.svg`}
                  width={60}
                  height={40}
                  alt={`${country} flag`}
                  className="rounded-lg"
                />
                <section className="flex flex-col md:flex-row flex-1 justify-between m-auto gap-2 md:gap-8 items-center font-medium">
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                    <h1 className="text-lg">{race.raceName}</h1>
                    <div className="flex gap-1">
                      <h1 className="">{race.Circuit.Location.locality},</h1>
                      <h1 className="">{race.Circuit.Location.country}</h1>
                    </div>
                  </div>

                  <h1>{formatDate(race.date, "MMM/dd/yyyy")}</h1>
                </section>
                <span className="text-2xl font-medium mb-1 text-blood-600">
                  +
                </span>
              </Link>
            </section>
          );
        }
        return null;
      })}
    </article>
  );
}
