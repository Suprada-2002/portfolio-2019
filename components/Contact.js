import styled from "styled-components";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelope,
  FaCode,
  FaJsSquare,
} from "react-icons/fa";

const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  color: var(--white);
  background-color: var(--light_black);

  h1 {
    font-size: 1.8rem;
    font-weight: 800;
    text-align: center;

    span {
      border-bottom: 3px solid var(--dark_blue);
    }
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem 1rem;
  }

  .social_icon {
    justify-content: center;
    text-align: center;
    font-size: 1.8rem;

    .icon {
      color: var(--light_blue);
      margin-right: 2rem;

      &:hover {
        color: var(--dark_blue);
      }
    }
  }

  .bottom {
    background-color: var(--dark_black);
    padding: 1.5rem;
    text-align: center;
  }
`;

function Contact() {
  return (
    <>
      <Wrapper>
        <h1>
          <span>Contact</span>
        </h1>
        <p>Get in touch with me</p>

        <div className="social_icon">
          <a href="https://github.com/Suprada-2002">
            <FaGithubAlt className="icon" />
          </a>

          <a href="https://www.linkedin.com/in/suprada-tripathy-2981a1201/">
            <FaLinkedinIn className="icon" />
          </a>

          <a href="supradatripathy789@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>

        <div className="bottom">Made with Love and Next.js @Suprada_2002</div>
      </Wrapper>
    </>
  );
}

export default Contact;
