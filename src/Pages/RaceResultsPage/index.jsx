import React, { useEffect, useState } from "react";
import xmlParser from "xml-js";
import RaceResultsList from "../../Components/ResultsList";
import NavBar from "../../Components/NavBar";

const RaceResultsPage = () => {
  const [raceResults, setRaceResults] = useState([]);

  useEffect(() => {
    const fetchRaceResults = async () => {
      try {
        const results = [];
        for (let i = 1; i <= raceResults.length + 25 ; i++) {
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
      }
    };

    fetchRaceResults();
  }, []);

  return (
    <main>
        <NavBar/>
      <RaceResultsList raceResults={raceResults} />
    </main>
  );
};

export default RaceResultsPage;
