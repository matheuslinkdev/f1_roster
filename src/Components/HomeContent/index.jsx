import Link from 'next/link';
import './style.scss'

import Image from "next/image";

const homeLinks = [
  {
    href: "/standings",
    title: "Championship Standings",
  },
  {
    href: "/results",
    title: "Race Results",
  },
  {
    href: "/drivers",
    title: "Drivers Info",
  },
  {
    href: "/schedule",
    title: "Season Schedule",
  },
]

const HomeContent = () => {
  return (
    <article className="home-texts">
      <Image
        src="https://i.postimg.cc/SRNkp0rT/f1-roster-icon.png"
        alt="f1 roster icon"
        width={170}
        height={230}
      />
      <section className="text-content">
        <p>
          Welcome to F1 Roster, Here you can find infos about the Formula 1
          season, including:
        </p>
        <ul>
          {homeLinks.map((link, index)=>{
            return(
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            )
          })}
        </ul>
        <p>And more coming soon.</p>
      </section>
    </article>
  );
}

export default HomeContent