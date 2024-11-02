"use client";

import { GetConstructors, GetConstructorStandings } from "@/api/FetchF1Data";
import F1TeamCard from "@/components/layout/TeamCard";
import ConstructorStandingCard from "@/components/layout/TeamStandingCard";
import { useQuery } from "@tanstack/react-query";

export default function ConstructorsStandingsData() {
  const { data, error, isFetched } = useQuery({
    queryKey: ["f1-constructors-standings"],
    queryFn: GetConstructorStandings,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  if (error) return <h2>Error: {error.message}</h2>;
  if (!isFetched) return <div>Loading...</div>;

  return (
    <>
      {data.map((constructor, index) => (
        <ConstructorStandingCard team={constructor} key={index} />
      ))}
    </>
  );
}
