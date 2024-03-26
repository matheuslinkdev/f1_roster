import { Link } from "react-router-dom"
import './style.module.scss'

import f1_roster_icon from '/public/icons/f1_roster-icon.png'

const HomeContent = () => {
  return (
    <article className="home-texts">

        <img src={f1_roster_icon} alt="f1 roster icon" />
        <section className="text-content">
            <p>
                Welcome to F1 Roster,
                Here you can find infos about the Formula 1 season, including:
            </p>
            <ul>
                <li>
                    <Link to="/f1_roster/standings">Championship Standings</Link>
                </li>
                <li>
                    <Link to="/f1_roster/results">Race Results</Link>
                </li>
                <li>
                    <Link to="/f1_roster/drivers">Drivers Info</Link>
                </li>
                <li>
                    <Link to="/f1_roster/schedule">Season Schedule</Link>
                </li>
            </ul>

            <p>And more coming soon!</p>
        </section>
    </article>
  )
}

export default HomeContent