"use client";

import { useEffect, useState, useMemo } from "react";
import xmlParser from "xml-js";
import RaceResultsList from "../../Components/ResultsList";
import Loading from "../../Components/Loading";
import { Center } from "@chakra-ui/react";

const RaceResultsPage = () => {
  const [raceResults, setRaceResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRaceResults = async (raceCount) => {
    const results = await Promise.all(
      Array.from({ length: raceCount }, async (_, i) => {
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
    return results;
  };

  useEffect(() => {
    const loadRaceResults = async () => {
      try {
        setIsLoading(true);

        const storedResults = localStorage.getItem("raceResults");
        if (storedResults) {
          setRaceResults(JSON.parse(storedResults));
          setIsLoading(false);
          return;
        }

        const results = await fetchRaceResults(25);
        setRaceResults(results);

        localStorage.setItem("raceResults", JSON.stringify(results));
      } catch (error) {
        console.error("Error fetching race results", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRaceResults();
  }, []);

  const memoizedRaceResults = useMemo(() => raceResults, [raceResults]);

  return (
    <Center>
      {isLoading ? (
        <Loading />
      ) : (
        <RaceResultsList raceResults={memoizedRaceResults} />
      )}
    </Center>
  );
};

export default RaceResultsPage;
