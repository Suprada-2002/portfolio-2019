import styled from "styled-components";
import Nav from "../components/Navbar";
import { FaGithubAlt, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--dark_blue);
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);

  .container {
    padding: 3rem;
    width: 50vw;
    height: fit-content;
    background-color: var(--dark_blue);
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    //border-radius: 8px solid white;

    .left {
      background-color: var(--light_black);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      a {
        color: var(--white);

        &:hover {
          color: var(--dark_blue);
          cursor: pointer;
        }
      }
    }

    .right {
      padding: 0.5rem;
      background-color: var(--dark_black);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        font-weight: 300;
        font-size: 0.8rem;
      }

      .butt {
        border: none;
        background-color: var(--dark_blue);
        text-align: center;
        color: black;
        border-radius: 2px;
        margin-top: 0.5rem;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .container {
      width: 90vw;
      grid-template-rows: 1fr fr;
      grid-template-columns: 1fr;

      .right {
        padding: 0.3rem;
      }

      .left {
        flex-direction: row;
      }
    }
  }
`;

const contactpage = () => {
  return (
    <>
      <Nav />
      <Wrapper>
        <div className="container">
          <div className="left">
            <a href="https://github.com/Suprada-2002" target="_blank">
              <FaGithubAlt size={50} />
            </a>
            <a href="supradatripathy789@gmail.com" target="_blank">
              <FaEnvelope size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/suprada-tripathy-2981a1201/"
              target="_blank"
            >
              <FaLinkedinIn size={50} />
            </a>
          </div>
          <div className="right">
            <p>Contact me here!!</p>
            <form data-netlify="true" action="POST">
              <h3>name</h3>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                name="name"
              />
              <h3>subject</h3>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                name="subject"
              />
              <h3>subject</h3>
              <textarea rows="5" cols="20" name="message"></textarea>
            </form>
            <input type="submit" className="butt" value="Register" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default contactpage;
