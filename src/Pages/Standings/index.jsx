import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import xmlParser from "xml-js";
import DriverStandingsList from "../../Components/StandingsList";

const StandingsPage = () => {
  const [driverStandings, setDriverStandings] = useState([]);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/current/driverStandings")
      .then((response) => response.text())
      .then((data) => {
        const json = xmlParser.xml2js(data, { compact: true, spaces: 4 });
        setDriverStandings(
          json.MRData.StandingsTable.StandingsList.DriverStanding
        );
      });
  }, []);

  console.log(driverStandings);

  return (
    <>
      <NavBar />
      <main>
        <DriverStandingsList driverStandings={driverStandings} />
      </main>
    </>
  );
};

export default StandingsPage;
