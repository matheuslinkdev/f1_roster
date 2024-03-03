import { useEffect } from "react";
import { useState } from "react";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const jsonContent = await response.json();
    return jsonContent.slice(0, 20);
  } catch (error) {
    console.error("Houve um erro:", error);
  }
};

const DriversList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchData("https://api.openf1.org/v1/drivers").then(
      (firstTwentyDrivers) => {
        setDrivers(firstTwentyDrivers);
        console.log(firstTwentyDrivers);
      }
    );
  }, []);

  return (
    <div>
      {drivers.map((driver, index) => {
        return <section key={index}>
          <img src={driver.headshot_url} alt={`${driver.full_name} photo`} style={{width: 100, height: 100}}/>
          <h3>{driver.full_name}</h3>
          <h4>{driver.team_name}</h4>
        </section>;
      })}
    </div>
  );
};

export default DriversList;
