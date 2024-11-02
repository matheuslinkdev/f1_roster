import ordinalSufixByPosition from "@/utils/ordinalSufix";
import Image from "next/image";
import React from "react";

const ConstructorStandingCard = ({ team }) => {
  return (
    <article className="flex flex-col w-[35rem] max-w-[95dvw] flex-wrap bg-gray-700 rounded-md overflow-hidden hover:bg-gray-800 transition-default">
      <header className=" flex  border-b-2 border-b-white items-center justify-between pl-2 text-xl font-medium">
        <h2>{ordinalSufixByPosition(team.position)}</h2>
        <h1>{team.name}</h1>
        <Image
          src={team.team_logo}
          width={70}
          height={70}
          alt={`${team.name} logo`}
          className="bg-white"
        />
      </header>
      <section>
        <Image
          src={team.car_image}
          width={400}
          height={140}
          alt={`${team.name} 2024 car image.`}
          className="m-auto"
        />
      </section>
      <footer className="flex flex-col md:flex-row flex gap-2 p-2">
        <h2 className="text-xl">{team.points}</h2>
      </footer>
    </article>
  );
};

export default ConstructorStandingCard;
