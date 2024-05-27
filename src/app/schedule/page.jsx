"use client";

import { useEffect, useState, useMemo } from "react";
import xmlParser from "xml-js";
import ScheduleList from "../../Components/ScheduleList";
import Loading from "../../Components/Loading";
import { Center } from "@chakra-ui/react";

const SchedulePage = () => {
  const [schedule, setSchedule] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setIsLoading(true);

        const storedSchedule = localStorage.getItem("schedule");
        if (storedSchedule) {
          setSchedule(JSON.parse(storedSchedule));
          setIsLoading(false);
          return;
        }

        const response = await fetch("https://ergast.com/api/f1/current");
        if (!response.ok) {
          throw new Error("Erro ao obter dados do calendário de corridas");
        }

        const data = await response.text();
        const json = xmlParser.xml2js(data, { compact: true, spaces: 4 });
        const raceSchedule = json.MRData.RaceTable.Race;
        setSchedule(raceSchedule);

        localStorage.setItem("schedule", JSON.stringify(raceSchedule));
      } catch (error) {
        console.error("Erro ao buscar dados do calendário de corridas:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  const memoizedSchedule = useMemo(() => schedule, [schedule]);

  return (
    <Center>
      {isLoading ? <Loading /> : <ScheduleList schedule={memoizedSchedule} />}
    </Center>
  );
};

export default SchedulePage;
