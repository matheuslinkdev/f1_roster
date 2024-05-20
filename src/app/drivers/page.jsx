"use client"

import { useEffect, useState } from "react";
import { fetchDrivers } from "../../Services/Api";
import DriversList from "../../Components/DriversList";
import Loading from "../../Components/Loading";
import { Center } from "@chakra-ui/react";

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
    <Center>
      {isLoading ? <Loading /> : <DriversList drivers={drivers} />}
    </Center>
  );
};

export default DriversPage;
