import React from "react";

const DriversCurrentStatus = () => {
  return (
    <section className="flex gap-4 flex-col md:flex-row w-full">
      <span className="bg-gray-800 px-2 py-1 border-l-4 border-l-green-500 rounded-sm text-lg font-medium">
        Current Regular Drivers
      </span>
      <span className="bg-gray-800 px-2 py-1 border-l-4 border-l-red-500 rounded-sm text-lg font-medium">
        Replaced drivers
      </span>
      <span className="bg-gray-800 px-2 py-1 border-l-4 border-l-yellow-500 rounded-sm text-lg font-medium">
        Non regular drivers
      </span>
    </section>
  );
};

export default DriversCurrentStatus;
