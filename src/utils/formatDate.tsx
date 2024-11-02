import { formatInTimeZone } from "date-fns-tz";

export function formatRaceDate(date: string, time: string) {
  if (!date || !time) return "";

  const dateTime = new Date(`${date}T${time}`);

  return formatInTimeZone(
    dateTime,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    "MMM/dd/yyyy, HH:mm"
  );
}
