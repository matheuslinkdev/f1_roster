export default function ordinalSufixByPosition(position: number | string) {
  const posStr = String(position);

  if (posStr === "1" || posStr === "21") {
    return `${posStr}st`;
  } else if (posStr === "2" || posStr === "22") {
    return `${posStr}nd`;
  } else if (posStr === "3" || posStr === "23") {
    return `${posStr}rd`;
  } else if (posStr === "NC") {
    return "NC";
  } else {
    return `${posStr}th`;
  }
}
