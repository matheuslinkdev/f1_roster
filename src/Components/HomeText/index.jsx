import { Link } from "react-router-dom"
import './style.scss'

const HomeTexts = () => {
  return (
    <article className="home-texts">
        <section className="text-content">
            <p>
                Welcome to F1 Roster,
                Here you can find infos about the Formula 1 season, including:
            </p>
            <ul>
                <li>
                    <Link to="/standings">Championship Standings</Link>
                </li>
                <li>
                    <Link to="/results">Race Results</Link>
                </li>
                <li>
                    <Link to="/drivers">Drivers Info</Link>
                </li>
                <li>
                    <Link to="/schedule">Season Schedule</Link>
                </li>
            </ul>

            <p>And more coming soon!</p>
        </section>
    </article>
  )
}

export default HomeTexts