export default function ordinalSufixByPosition(position: number | string) {

  if (position === "1" || position === "21") {
    return `${position}st`;
  } else if (position === "2" || position === "22") {
    return `${position}nd`;
  } else if (position === "3" || position === "23") {
    return `${position}rd`;
  } else if (position === "NC") {
    return "NC";
  } else {
    return `${position}th`;
  }
}
