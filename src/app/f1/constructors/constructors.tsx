"use client";

import { GetConstructors } from "@/api/FetchF1Data";
import F1TeamCard from "@/components/layout/TeamCard";
import { useQuery } from "@tanstack/react-query";

export default function ConstructorsData() {
  const { data, error, isFetched } = useQuery({
    queryKey: ["f1constructors"],
    queryFn: GetConstructors,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  if (error) return <h2>Error: {error.message}</h2>;
  if (!isFetched) return <div>Loading...</div>;

  const sortedConstructors = [...data].sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <>
      {sortedConstructors.map((constructor, index) => (
        <F1TeamCard team={constructor} key={index} />
      ))}
    </>
  );
}