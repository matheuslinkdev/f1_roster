export default function defineBorderColor(surename: string) {
  const replacedDrivers = ["Sargeant", "Ricciardo"];
  const nonRegularDrivers = ["Bearman"];

  if (replacedDrivers.includes(surename)) {
    return "2px solid red";
  } else if (nonRegularDrivers.includes(surename)) {
    return "2px solid gray";
  } else {
    return "2px solid green";
  }
}
