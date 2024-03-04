import { useState, useEffect } from "react";
import xmlParser from "xml-js";

const DriversList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    
    }, []);
    
    console.log(drivers);
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
