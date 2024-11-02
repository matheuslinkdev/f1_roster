"use client";

import { GetDrivers } from "@/api/FetchF1Data";
import DriverCard from "@/components/layout/DriverCard";
import { useQuery } from "@tanstack/react-query";

export default function DriversData() {
  const { data, error, isFetched } = useQuery({
    queryKey: ["drivers"],
    queryFn: GetDrivers,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  if (error) return <h2>Error: {error.message}</h2>;
  if (!isFetched) return <div>Loading...</div>;

  const sortedDrivers = [...data].sort((a, b) => {
    if (a.team < b.team) return -1;
    if (a.team > b.team) return 1;
    return 0;
  });

  return (
    <>
      {sortedDrivers.map((driver, index) => (
        <DriverCard driver={driver} key={index} />
      ))}
    </>
  );
}
