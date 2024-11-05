import { DriverProps } from "@/types/f1Types";
import defineBorderColor from "@/utils/border";
import Image from "next/image";
import React from "react";

type Props = {
  driver: DriverProps;
};

const DriverCard = ({ driver }: Props) => {
  return (
    <article
      className="relative w-sm md:w-[35rem] flex items-center justify-between flex-col md:flex-row bg-gray-700 rounded-md overflow-hidden hover:scale-105 transition-default"
      style={{ border: defineBorderColor(driver.last_name) }}
    >
      <Image
        src={driver.driver_image}
        width={150}
        height={150}
        alt={`${driver.first_name} ${driver.last_name} image`}
        className="bg-gray-800 px-2 flex-2 w-full h-auto md:w-28 md:h-auto"
      />
      <section className="flex flex-col h-full justify-evenly items-center md:items-start flex-1 gap-2 text-center md:text-start md:ml-2 md:gap-0">
        <section className="flex gap-1 items-baseline">
          <span className="text-xl">{driver.first_name}</span>
          <h3 className="uppercase font-semibold text-2xl">
            {driver.last_name}
          </h3>
        </section>
        <section className="flex text-lg gap-1">
          <span>Team:</span>
          <h3 className="font-medium">{driver.team}</h3>
        </section>
        <Image
          src={driver.country_flag}
          width={50}
          height={50}
          alt={`${driver.first_name} ${driver.last_name} image`}
          className="flex-2 absolute top-0 right-0 md:relative rounded-l-sm md:rounded-sm"
        />
      </section>
      <Image
        src={driver.driver_number}
        width={80}
        height={80}
        alt={`${driver.first_name} ${driver.last_name} image`}
      />
    </article>
  );
};

export default DriverCard;
