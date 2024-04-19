import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/driver_standings">Driver Standings</Link>
      <Link href="/schedule">Schedule</Link>
      <Link href="/results">Results</Link>
      <Link href="/drivers">Drivers</Link>
    </main>
  );
}
