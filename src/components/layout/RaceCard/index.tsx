"use client";

import { formatRaceDate } from "@/utils/formatDate";
import { formatDate } from "date-fns";
import React, { useState } from "react";

const date = new Date
const today = formatDate(date, "MM/dd/yyyy")

const RaceCard = ({ race }) => {
  const firstPractice = race.FirstPractice;
  const secondPractice = race.SecondPractice;
  const thirdPractice = race.ThirdPractice;
  const qualifying = race.Qualifying;
  const sprintRace = race.Sprint;
  
  const formattedRaceDay = formatDate(race.date, "MM/dd/yyyy")

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const isPast = formattedRaceDay < today
  const isToday = formattedRaceDay === today

  const defineBorder = ()=>{
    if (isPast) return "red"
    else if (isToday) return "green"
    else return "yellow"  
  }

  return (
    <section className="border-[1px] rounded-lg w-[35rem] max-w-[95dvw] overflow-hidden" style={{borderColor: defineBorder()}}>
      <header className="flex justify-between items-center w-full">
        <button
          aria-expanded={isOpen}
          onClick={toggleAccordion}
          className="w-full flex justify-between py-3 px-4 text-gray-800 font-semibold focus:outline-none text-xl"
        >
          <h1 className="">{race.raceName}</h1>
          <span>{isOpen ? "-" : "+"}</span>
        </button>
      </header>
      {isOpen && (
        <article className="flex flex-col p-4 text-gray-700 bg-gray-950 text-gray-300 font-medium gap-2">
          <section className="flex justify-between items-center w-full text-lg">
            <h2>{race.Circuit.circuitName}</h2>
            <div className="flex gap-1">
              <h2 className="">{race.Circuit.Location.locality}, </h2>
              <h2>{race.Circuit.Location.country}</h2>
            </div>
          </section>
          <section className="flex flex-col text-lg gap-2">
            <div className="flex gap-2 bg-gray-900 p-2 rounded-lg">
              <h3 className="text-gray-300 ">FP1: </h3>
              <h3 className="">
                {formatRaceDate(
                  race.FirstPractice.date,
                  race.FirstPractice.time
                )}
              </h3>
            </div>
            {thirdPractice.date !== "" ? (
              <>
                <div className="flex gap-2 bg-gray-900 p-2 rounded-lg">
                  <h3 className="text-gray-300 ">FP2: </h3>
                  <h3 className="">
                    {formatRaceDate(secondPractice.date, secondPractice.time)}
                  </h3>
                </div>
                <div className="flex gap-2 bg-gray-900 p-2 rounded-lg">
                  <h3 className="text-gray-300 ">FP3: </h3>
                  <h3 className="">
                    {formatRaceDate(thirdPractice.date, thirdPractice.time)}
                  </h3>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-2 bg-gray-900 p-2 rounded-lg">
                  <h3 className="text-gray-300 ">Sprint Quali: </h3>
                  <h3 className="">
                    {formatRaceDate(secondPractice.date, secondPractice.time)}
                  </h3>
                </div>
                <div className="flex gap-2 bg-gray-900 p-2 rounded-lg">
                  <h3 className="text-gray-300 ">Sprint Race: </h3>
                  <h3 className="">
                    {formatRaceDate(sprintRace.date, sprintRace.time)}
                  </h3>
                </div>
              </>
            )}
            <div className="flex gap-2 bg-gray-900 p-2 rounded-lg">
              <h3 className="text-gray-300 ">Qualifying:</h3>
              <h3 className="">
                {formatRaceDate(qualifying.date, qualifying.time)}
              </h3>
            </div>
            <div className="flex gap-2 bg-gray-800 p-2 rounded-lg">
              <h3 className="text-gray-300 ">Race:</h3>
              <h3 className="">{formatRaceDate(race.date, race.time)}</h3>
            </div>
          </section>
        </article>
      )}
    </section>
  );
};

export default RaceCard;
