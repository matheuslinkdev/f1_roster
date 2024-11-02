import { DriverProps } from "@/types/f1Types";
import defineBorderColor from "@/utils/border";
import ordinalSufix from "@/utils/ordinalSufix";
import Image from "next/image";

type Props = {
  driver: DriverProps;
};

const DriverStandingCard = ({ driver }: Props) => {
  return (
    <article
      className="relative max-w-[80dvw] md:w-[45rem] flex items-start md:items-center justify-between flex-col md:flex-row bg-gray-700 rounded-md overflow-hidden hover:scale-105 transition-default"
      style={{ border: defineBorderColor(driver.last_name) }}
    >
      <section className="flex flex-wrap">
        <Image
          src={driver.driver_image}
          width={120}
          height={120}
          alt={`${driver.first_name} ${driver.last_name} image`}
          className="bg-gray-800 px-2 flex-2 w-full h-auto md:w-28 md:h-auto"
        />
        <section className="flex flex-col gap-1 ml-2 mt-2 md:mt-0 justify-center items-start">
          <div className="flex items-baseline gap-1">
            <h1 className="text-2xl md:text-lg font-medium absolute md:relative top-0 left-2 md:left-0">
              {ordinalSufix(driver.position)}
            </h1>
            <span className="text-lg hidden md:block">-</span>
            <span className="text-lg">{driver.first_name}</span>
            <h3 className="uppercase font-semibold text-xl">
              {driver.last_name}
            </h3>
          </div>
          <h1 className="text-lg font-medium">{driver.points} points</h1>
        </section>
      </section>

      <section className="flex text-lg gap-1 justify-start items-start text-justify ml-2 md:ml-auto">
        <span>Team:</span>
        <h3 className="font-medium">{driver.team}</h3>
      </section>
      <Image
        src={driver.driver_number}
        width={80}
        height={80}
        alt={`${driver.first_name} ${driver.last_name} image`}
        className="absolute top-2 right-0 md:relative"
      />
    </article>
  );
};

export default DriverStandingCard;
