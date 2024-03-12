import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import xmlParser from 'xml-js';
import ScheduleList from "../../Components/ScheduleList";

const SchedulePage = () => {

  const [schedule, setSchedule] = useState([])

    useEffect(() => {
      fetch("http://ergast.com/api/f1/current")
        .then((response) => response.text())
        .then((data) => {
          const json = xmlParser.xml2js(data, { compact: true, spaces: 4 });
          setSchedule(json.MRData.RaceTable.Race);
        });
    }, []);

  return (
    <main>
      <NavBar />
      <ScheduleList schedule={schedule}/>
    </main>
  );
};

export default SchedulePage;
