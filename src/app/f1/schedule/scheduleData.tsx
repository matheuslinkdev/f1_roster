"use client";

import { GetSchedule } from "@/api/FetchF1Data";
import RaceCard from "@/components/layout/RaceCard";
import Loading from "@/components/ui/feedback/loading";
import { useQuery } from "@tanstack/react-query";

export default function ScheduleData() {
  const { data, error, isFetched } = useQuery({
    queryKey: ["schedule"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return GetSchedule();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  if (error) return <h2>Error: {error.message}</h2>;
  if (!isFetched) return <Loading />;

  return (
    <>
      {/* @ts-expect-error i need to create the types of races */}
      {data.map((race, index) => (
        <RaceCard race={race} key={index} />
      ))}
    </>
  );
}
