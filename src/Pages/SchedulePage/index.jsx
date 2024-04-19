import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import xmlParser from "xml-js";
import ScheduleList from "../../Components/ScheduleList";
import Loading from "../../Components/Loading"; // Importar o componente de loading

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
    <main>
      <NavBar />
      {isLoading ? <Loading /> : <ScheduleList schedule={schedule} />}
    </main>
  );
};

export default SchedulePage;
