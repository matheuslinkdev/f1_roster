import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import { fetchDrivers } from "../../Services/Api";
import DriversList from "../../Components/DriversList";
import Loading from "../../Components/Loading";

const DriversPage = () => {
  const [drivers, setDrivers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchDrivers();
        setDrivers(data.slice(2320, 2340));
      } catch (error) {
        console.error("Erro ao buscar dados dos pilotos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <NavBar />
      {isLoading ? <Loading /> : <DriversList drivers={drivers} />}
    </main>
  );
};

export default DriversPage;
