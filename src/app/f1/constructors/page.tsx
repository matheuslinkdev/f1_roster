import React from "react";
import ConstructorsData from "./constructors";

const Constructors = async () => {
  return (
    <main className="flex flex-col w-full min-h-screen py-8">
      <article className="flex flex-col gap-4 my-4">
        <h1 className="text-3xl">Formula 1 2024 Teams</h1>
      </article>
      <article className="flex flex-wrap justify-center items-center gap-8">
        <ConstructorsData />
      </article>
    </main>
  );
};

export default Constructors;
