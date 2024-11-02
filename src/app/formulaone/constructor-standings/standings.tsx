"use client";

import { GetConstructorStandings } from "@/api/FetchF1Data";
import ConstructorStandingCard from "@/components/layout/TeamStandingCard";
import { StandingConstructorProps } from "@/types/f1Types";
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
      {data.map((constructor: StandingConstructorProps) => (
        <ConstructorStandingCard team={constructor} key={constructor.name} />
      ))}
    </>
  );
}
