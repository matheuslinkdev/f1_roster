// api.js
async function fetchDrivers() {
  const response = await fetch("https://api.openf1.org/v1/drivers");
  const data = await response.json();
  return data;
}

export { fetchDrivers };
