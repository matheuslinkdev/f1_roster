import { GetSchedule } from '@/api/FetchF1Data';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react'
import ScheduleData from './scheduleData';

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
        <main className="flex flex-col w-full min-h-screen">
          <article className="flex flex-col gap-4 mt-4">
            <h1 className="text-3xl">Race Status</h1>
            
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