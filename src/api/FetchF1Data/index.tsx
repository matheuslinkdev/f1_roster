import axios from "axios";
import convert from "xml-js";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const GetDrivers = async () => {
  const res = await axios.get(`${API_URL}/formula-one/2024/drivers`);
  return res.data;
};

export const GetDriverStandings = async () => {
  const res = await axios.get(`${API_URL}/formula-one/2024/driver-standings`);
  return res.data;
};

export const GetConstructors = async () => {
  const res = await axios.get(`${API_URL}/formula-one/2024/constructors`);
  return res.data;
};
export const GetConstructorStandings = async () => {
  const res = await axios.get(
    `${API_URL}/formula-one/2024/constructor-standings`
  );
  return res.data;
};

export const GetSchedule = async () => {
  const res = await axios.get(`${API_URL}/formula-one/2024/schedule`);
  return res.data
};

export const GetResults = async (start: number, count: number) => {
  const results = await Promise.all(
    Array.from({ length: count }, async (_, i) => {
      const response = await fetch(
        `https://ergast.com/api/f1/current/${start + i}/results`
      );
      if (!response.ok) {
        throw new Error("Error fetching race data " + (start + i));
      }
      const data = await response.text();
      const json = convert.xml2json(data, { compact: true, spaces: 4 });
      const results = JSON.parse(json)
      return results;
    })
  );
  return results;
};


