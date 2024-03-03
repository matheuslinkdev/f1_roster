import { useState, useEffect } from "react";
import xmlParser from "xml-js";

const DriversList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/2024/drivers")
      .then((response) => response.text())
      .then((data) => {
        const json = xmlParser.xml2js(data, { compact: true, spaces: 4 });
        setDrivers(json.MRData.DriverTable.Driver);
      })
      .catch((error) =>
        console.error("Erro ao obter dados dos pilotos:", error)
      );
  }, []);

  return (
    <main>
      {drivers.map((driver, index) => {
        return (
          <section key={index}>
            <h3>
              {driver.GivenName._text} {driver.FamilyName._text}
            </h3>
          </section>
        );
      })}
    </main>
  );
};

export default DriversList;
