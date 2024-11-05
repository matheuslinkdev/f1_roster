import { GetSchedule } from '@/api/FetchF1Data';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react'
import ScheduleData from './scheduleData';
import RaceStatus from '@/components/fragments/RaceStatus';

const F1Schedule = async () => {

      const queryClient = new QueryClient();

      await queryClient.prefetchQuery({
        queryKey: ["schedule"],
        queryFn: GetSchedule,
      });

      const data = queryClient.getQueryData(["schedule"]);

      if (!data) return <div>Loading...</div>;

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <main className="flex flex-col w-full min-h-screen p-8 gap-6">
          <article className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl">Formula 1 2024 Schedule</h1>
            <RaceStatus />
          </article>
          <article className="flex flex-col gap-6">
            <ScheduleData />
          </article>
        </main>
      </HydrationBoundary>
    </>
  );
}

export default F1Schedule