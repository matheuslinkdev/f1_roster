import { useEffect, useState } from "react";
import xmlParser from "xml-js";
import RaceResultsList from "../../Components/ResultsList";
import NavBar from "../../Components/NavBar";
import Loading from "../../Components/Loading";

const RaceResultsPage = () => {
  const [raceResults, setRaceResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRaceResults = async () => {
      try {
        setIsLoading(true);

        const results = [];
        for (let i = 1; i <= 25; i++) {
          const response = await fetch(
            `http://ergast.com/api/f1/current/${i}/results`
          );
          if (!response.ok) {
            throw new Error("Erro ao obter dados da corrida " + i);
          }
          const data = await response.text();
          const json = xmlParser.xml2js(data, { compact: true, spaces: 4 });
          results.push(json.MRData);
        }
        setRaceResults(results);
      } catch (error) {
        console.error("Erro ao buscar dados das corridas:", error);
      } finally {
        setIsLoading(false);  
      }
    };

    fetchRaceResults();
  }, []);

  return (
    <main>
      <NavBar />
      {isLoading ? (
        <Loading/>
      ) : (
        <RaceResultsList raceResults={raceResults} isLoading={isLoading} />
      )}
    </main>
  );
};

export default RaceResultsPage;
