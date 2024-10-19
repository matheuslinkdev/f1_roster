export default function ordinalSufixByPosition(position: number | string) {
  const lastChar = position.toString().charAt(position.toString().length - 1);

  if (lastChar === "1") {
    return `${position}st`;
  } else if (lastChar === "2") {
    return `${position}nd`;
  } else if (lastChar === "3") {
    return `${position}rd`;
  } else if (position === "NC") {
    return "NC";
  } else {
    return `${position}th`;
  }
}
