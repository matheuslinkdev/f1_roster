"use client"

import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import xmlParser from "xml-js";
import DriverStandingsList from "../../Components/StandingsList";
import Loading from "../../Components/Loading";

const StandingsPage = () => {
  const [driverStandings, setDriverStandings] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://ergast.com/api/f1/current/driverStandings"
        );
        if (!response.ok) {
          throw new Error("Erro ao obter dados da classificação dos pilotos");
        }
        const data = await response.text();
        const json = xmlParser.xml2js(data, { compact: true, spaces: 4 });
        setDriverStandings(
          json.MRData.StandingsTable.StandingsList.DriverStanding
        );
      } catch (error) {
        console.error(
          "Erro ao buscar dados da classificação dos pilotos:",
          error
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <DriverStandingsList driverStandings={driverStandings} />
        )}
      </main>
  );
};

export default StandingsPage;
