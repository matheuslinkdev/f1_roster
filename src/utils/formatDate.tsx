import { formatInTimeZone } from "date-fns-tz";

export function formatRaceDate(date: string, time?: string) {
  if (!date) return "";

  const dateTime = time ? new Date(`${date}T${time}`) : new Date(date);

  return formatInTimeZone(
    dateTime,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    time ? "MMM/dd/yyyy, HH:mm" : "MMM/dd/yyyy"
  );
}
