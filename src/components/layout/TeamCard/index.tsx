import { ConstructorProps } from "@/types/f1Types";
import Image from "next/image";
import React from "react";

type Props = {
  team: ConstructorProps;
};

const F1TeamCard = ({ team }: Props) => {
  return (
    <article className="flex flex-col w-[35rem] max-w-[95dvw] flex-wrap bg-gray-700 rounded-md overflow-hidden hover:bg-gray-800 transition-default">
      <header className=" flex  border-b-2 border-b-white items-center justify-between pl-2">
        <h1 className="text-2xl font-medium">{team.name}</h1>
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
        {team.team_drivers.map((driver) => {
          return (
            <section
              key={driver.first_name}
              className="bg-gray-900 flex flex-1 items-center justify-start rounded-md"
            >
              <Image
                src={driver.driver_image}
                width={100}
                height={80}
                alt={`${driver.first_name} ${driver.last_name} image.`}
              />
              <div className="flex flex-row md:flex-col gap-1 md:gap-0 font-medium">
                <h2 className="text-common-200 text-lg">{driver.first_name}</h2>
                <h2 className="uppercase text-xl">{driver.last_name}</h2>
              </div>
            </section>
          );
        })}
      </footer>
    </article>
  );
};

export default F1TeamCard;
