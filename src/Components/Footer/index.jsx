import "./style.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <section className="footer-logo">
        <Image src="https://i.postimg.cc/SRNkp0rT/f1-roster-icon.png" alt="f1 roster icon" width={50} height={50}/>
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
