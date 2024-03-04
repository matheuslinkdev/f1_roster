import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import { fetchConstructors } from "../../Services/Api";

const ConstructorsPage = () => {

  const [constructors, setConstructors] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const data = await fetchConstructors()
      setConstructors(data)
    }
    fetchData()
  }, [])
  
  console.log(constructors);
  return (
    <main>
      <NavBar /> ConstructorsPage
    </main>
  );
};

export default ConstructorsPage;
