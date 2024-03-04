import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import { fetchCircuits } from "../../Services/Api";

const CircuitsPage = () => {

  const [circuits, setCircuits] = useState([])

    useEffect(() => {
      async function fetchData() {
        const data = await fetchCircuits();
        setCircuits(data.slice(2320, 2340));
      }

      fetchData();
    }, []);

    console.log(circuits);

  return (
    <main>
      <NavBar /> CircuitsPage
    </main>
  );
};

export default CircuitsPage;
