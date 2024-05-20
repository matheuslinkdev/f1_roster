"use client"

import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
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

        const response = await fetch("https://ergast.com/api/f1/current");
        if (!response.ok) {
          throw new Error("Erro ao obter dados do calendário de corridas");
        }

        const data = await response.text();
        const json = xmlParser.xml2js(data, { compact: true, spaces: 4 });
        setSchedule(json.MRData.RaceTable.Race);
      } catch (error) {
        console.error("Erro ao buscar dados do calendário de corridas:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <Center>
      {isLoading ? <Loading /> : <ScheduleList schedule={schedule} />}
    </Center>
  );
};

export default SchedulePage;
