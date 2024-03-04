import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import { fetchDrivers } from "../../Services/Api";
import DriversList from "../../Components/DriversList";

const DriversPage = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDrivers();
      setDrivers(data.slice(2320, 2340));
    }

    fetchData();
  }, []);

  console.log(drivers);

  return (
    <main>
      <NavBar /> DriversPage
      <DriversList drivers={drivers} />
    </main>
  );
};

export default DriversPage;
