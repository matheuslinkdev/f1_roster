import { HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import { GetSchedule } from '@/api/FetchF1Data';
import F1Results from './results';

const F1RaceResults = async () => {
     const queryClient = new QueryClient();

     await queryClient.prefetchQuery({
       queryKey: ["schedule"],
       queryFn: GetSchedule,
     });

     const data = queryClient.getQueryData(["schedule"]);

     if (!data) return <div>Loading...</div>;
  return (
    <HydrationBoundary>
        <main>
            <article className="flex flex-col">
            <F1Results/>
            </article>
        </main>
    </HydrationBoundary>
  )
}

export default F1RaceResults