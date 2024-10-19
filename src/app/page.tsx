import Link from "next/link";

export default function Home() {
  return (
    <main className="flex relative w-full min-h-screen bg-[url('/images/f1-australia.webp')] bg-cover bg-center">
      <article className="flex flex-col items-start justify-center w-full min-h-screen ">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950/95" />
        <section className="relative z-10 flex flex-col justify-center items-start h-full text-white p-6 gap-2">
          <h1 className="text-4xl font-bold">Welcome to F1 Roster</h1>
          <p className="text-xl">
            Here you can find the latest infos about Formula One and Formula Two
            season
          </p>
          <section className="font-medium flex gap-4 text-lg mt-6 flex-wrap">
            <Link href="/formulaone" className="w-36 text-center py-2 px-4 rounded-full bg-gradient-to-r from-blood-600 to-blood-800">
              Formula 1
            </Link>
            <Link href="/formulatwo" className="w-36 text-center py-2 px-4 rounded-full bg-gradient-to-r from-marine-600 to-marine-800">
              Formula 2
            </Link>
            <Link href="/formulaacademy" className="w-36 text-center py-2 px-4 rounded-full bg-gradient-to-r from-red-violet-800 to-marine-700">
              F1 Academy
            </Link>
          </section>
        </section>
      </article>
    </main>
  );
}
