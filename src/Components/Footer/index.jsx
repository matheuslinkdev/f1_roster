import f1_roster_icon from "/public/icons/f1_roster-icon.png";
import "./style.module.scss";

const Footer = () => {
  return (
    <footer>
      <section className="footer-logo">
        <img src={f1_roster_icon} alt="" />
      </section>
      <ul className="link-list">
        <li>
          <a
            href="https://github.com/MthsLnk-gthb?tab=repositories"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/matheus-link-21b3a4265/"
            target="_blank"
          >
            Linkedin
          </a>{" "}
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=GTvVlcSGMvlwrGVmbWddCTVhwpKzkzNWbWzTzzchQPSTxVKTpHkjqcjqGCjhvLvQTvDKrJhvSZqKm"
            target="_blank"
          >
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
