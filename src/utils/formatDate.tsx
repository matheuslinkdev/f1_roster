import { formatInTimeZone } from "date-fns-tz";
import { format } from "date-fns";

export function formatRaceDate(date, time) {
  if (!date || !time) return "";

  const dateTime = new Date(`${date}T${time}`);

  return formatInTimeZone(
    dateTime,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    "MMM/dd/yyyy, HH:mm"
  );
}
