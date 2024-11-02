"use client"

import { GetResults } from "@/api/FetchF1Data";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formulaOneLinks } from "@/data/links";


export default function Home () {

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
          <section className="font-medium flex flex-col md:flex-row gap-4 text-lg mt-6 flex-wrap">
            
             {formulaOneLinks.map((link, index)=>{
              return(
                <Link href={link.href} className="text-center py-2 bg-gray-800 px-4 rounded-full hover:bg-gray-700 transition-default" key={index}>
                  {link.name}
                </Link>
              )
             })}
          </section>
        </section>
      </article>
    </main>
  );
}
