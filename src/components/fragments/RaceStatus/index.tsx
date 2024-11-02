import React from "react";

const RaceStatus = () => {
  return (
    <section className="flex gap-4 flex-col md:flex-row">
      <span className="bg-gray-800 px-2 py-1 border-l-4 border-l-red-600 rounded-sm text-lg font-medium">
        Finished Races
      </span>
      <span className="bg-gray-800 px-2 py-1 border-l-4 border-l-yellow-500 rounded-sm text-lg font-medium">
        Not raced yet
      </span>
    </section>
  );
};

export default RaceStatus;
