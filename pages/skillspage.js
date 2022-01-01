import Nav from "../components/Navbar";
import styled from "styled-components";
import { FaReact, FaFigma, FaSass, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs, IoLogoCss3 } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: fit-content;
  width: 100vw;
  background-image: url("./skill_back.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  padding-top: 9vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    color: var(--white);
  }

  .cards {
    height: fit-content;
    width: 87vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1.5rem;

    .card {
      background-color: var(--dark_black);
      width: 30vh;
      height: 20vh;
      border-radius: 8px;
      color: var(--dark_blue);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        font-weight: 300;
        font-size: 1rem;
      }
    }
  }

  img {
    padding: 2rem;
    width: 60vw;
    height: 40vw;
  }

  @media only screen and (max-width: 1320px) {
    .cards {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }

  @media only screen and (max-width: 1000px) {
    .cards {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }
  }

  @media only screen and (max-width: 700px) {
    .cards {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;

function Skill() {
  return (
    <>
      <Nav />
      <Wrapper>
        <h1 className="title">SKILL SET</h1>

        <div className="cards">
          <div className="card">
            <FaReact size={70} />
            <h1>React</h1>
          </div>

          <div className="card">
            <FaFigma size={70} />
            <h1>Figma</h1>
          </div>

          <div className="card">
            <IoLogoJavascript size={70} />
            <h1>JavaScript</h1>
          </div>

          <div className="card">
            <FaSass size={70} />
            <h1>Sass</h1>
          </div>

          <div className="card">
            <SiNextdotjs size={70} />
            <h1>Nextjs</h1>
          </div>

          <div className="card">
            <FaHtml5 size={70} />
            <h1>HTML5</h1>
          </div>

          <div className="card">
            <IoLogoNodejs size={70} />
            <h1>Node.js</h1>
          </div>

          <div className="card">
            <IoLogoCss3 size={70} />
            <h1>CSS</h1>
          </div>
        </div>

        <img src="https://github-readme-stats.vercel.app/api?username=Suprada-2002&count_private=true&theme=dark&show_icons=true)](https://github.com/Suprada-2002/github-readme-stats"></img>
      </Wrapper>
    </>
  );
}

export default Skill;
