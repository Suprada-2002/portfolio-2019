import { Container } from "../styles/HeroStyle";
import { FaGithubAlt, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import About from "./About";
import Skill from "./Skills";
import ContactPage from "./Contact";
import ProjectP from "../pages/projectpage";

const First = () => {
  return (
    <>
      <Container>
        <div className="hero-wrapper">
          <div className="text">
            <h2 className="upper_text">Hello, I'm</h2>
            <h1 className="name_text">SUPRADA TRIPATHY</h1>
            <p className="bottom_text">CREATIVE FRONT-END DEVELOPER</p>
            <a className="button" href="#" target="_blank">
              Resume
            </a>
            <div className="social_icon">
              <a href="https://github.com/Suprada-2002" target="_blank">
                <FaGithubAlt className="icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/suprada-tripathy-2981a1201/"
                target="_blank"
              >
                <FaLinkedinIn className="icon" />
              </a>

              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mail&to=supradatripathy789@gmail.com"
                target="_blank"
              >
                <FaEnvelope className="icon" />
              </a>
            </div>
          </div>
        </div>
        <About />
        <Skill />
        <ProjectP />
        <ContactPage />
      </Container>
    </>
  );
};

export default First;
