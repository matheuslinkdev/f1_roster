const requestOptions = {
  method: "GET",
  redirect: "follow",
};

export async function fetchDrivers() {
  const response = await fetch("https://api.openf1.org/v1/drivers");
  const data = await response.json();
  return data;
}

export async function fetchConstructors (){

  fetch("http://ergast.com/api/f1/2024/constructors", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export async function fetchCircuits (){
  fetch("http://ergast.com/api/f1/2024/circuits", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

