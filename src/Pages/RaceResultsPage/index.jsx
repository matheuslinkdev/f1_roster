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

      const results = await Promise.all(
        Array.from({ length: 25 }, async (_, i) => {
          const response = await fetch(
            `https://ergast.com/api/f1/current/${i + 1}/results`
          );
          if (!response.ok) {
            throw new Error("Error fetching race data  " + (i + 1));
          }
          const data = await response.text();
          const json = xmlParser.xml2js(data, { compact: true, spaces: 4 });
          return json.MRData;
        })
      );
      setRaceResults(results);
    } catch (error) {
      console.error("Error fetching race results", error);
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
