import { FaCar, FaFlagCheckered, FaTrophy, FaUser, FaCalendarAlt, FaHome, FaNewspaper } from "react-icons/fa";

const navBarLinks = [
  { href: "/", text: "Home", icon: FaHome },
  { href: "/standings", text: "Standings", icon: FaTrophy },
  { href: "/results", text: "Results", icon: FaFlagCheckered },
  { href: "/drivers", text: "Drivers", icon: FaUser },
  { href: "/schedule", text: "Schedule", icon: FaCalendarAlt },
  { href: "/constructors", text: "Constructors", icon: FaCar },
  {
    href: "https://www.formula1.com/en/latest/all",
    text: "News",
    icon: FaNewspaper,
  },
];

export default navBarLinks