import { GetDrivers } from "@/api/FetchF1Data";
import DriversCurrentStatus from "@/components/fragments/CurrentStatus";
import { DriverProps } from "@/types/f1Types";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import DriversData from "./drivers";

const Drivers = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["drivers"],
    queryFn: GetDrivers,
  });

  const data = queryClient.getQueryData<DriverProps[]>(["drivers"]);

  if (!data) return <div>Loading...</div>;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex flex-col w-full min-h-screen gap-6 p-8">
        <article className="flex flex-col gap-4 mt-4">
          <h1 className="text-3xl">Formula 1 Drivers of 2024</h1>
          <DriversCurrentStatus />
        </article>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 py-6">
          <DriversData />
        </article>
      </main>
    </HydrationBoundary>
  );
};

export default Drivers;
