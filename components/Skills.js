import styled from "styled-components";
import { FaReact, FaFigma, FaSass } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs, IoLogoCss3 } from "react-icons/io";

const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;
  background-image: url("./skill_back.svg");

  h2 {
    color: var(--white);
    font-size: 1.8rem;
    text-align: center;

    span {
      border-bottom: 3px solid var(--dark_black);
    }
  }

  .cards {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 1rem;
    justify-items: center;

    .item {
      flex: 1;
      width: 30vh;
      display: flex;
      padding: 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--dark_blue);
      background-color: var(--dark_black);
      border-radius: 8px;
    }
  }
  @media only screen and (max-width: 900px) {
    .cards {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;

const Skills = () => {
  return (
    <>
      <Wrapper>
        <h2>
          <span>Skillset</span>
        </h2>
        <div className="cards">
          <div className="item">
            <FaReact className="icon" size={60} />
            <h3>React</h3>
          </div>

          <div className="item">
            <IoLogoJavascript className="icon" size={60} />
            <h3>Javascript</h3>
          </div>

          <div className="item">
            <FaSass className="icon" size={60} />
            <h3>Sass</h3>
          </div>

          <div className="item">
            <FaFigma className="icon" size={60} />
            <h3>Figma</h3>
          </div>

          <div className="item">
            <IoLogoNodejs className="icon" size={60} />
            <h3>Nodejs</h3>
          </div>

          <div className="item">
            <IoLogoCss3 className="icon" size={60} />
            <h3>Css3</h3>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Skills;
