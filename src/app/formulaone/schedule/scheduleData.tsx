"use client";

import { GetSchedule } from "@/api/FetchF1Data";
import RaceCard from "@/components/layout/RaceCard";
import { useQuery } from "@tanstack/react-query";

export default function ScheduleData() {
  const { data, error, isFetched } = useQuery({
    queryKey: ["schedule"], 
    queryFn: GetSchedule,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  console.log(data)

  if (error) return <h2>Error: {error.message}</h2>;
  if (!isFetched) return <div>Loading...</div>;

  return (
    <>
      {data.map((race, index) => (
        <RaceCard race={race} key={index} />
      ))}
    </>
  );
}
