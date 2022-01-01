import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;
  color: var(--white);
  display: flex;
  justify-content: space-around;
  gap: 40px;
  padding: 2.5rem;

  .info {
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    .title {
      color: var(--white);
      font-weight: 800;

      span {
        border-bottom: 2px solid var(--dark_blue);
      }
    }

    .desc {
      font-weight: 300;
    }

    a {
      text-decoration: none;
      color: var(--dark_blue);

      .icon {
        padding-top: 0.5rem;
      }

      &:hover {
        color: var(--white);
      }
    }
  }

  .image-container {
    padding-top: 2rem;

    .image {
      width: 260px;
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: fit-content;
    display: grid;
    text-align: center;
    grid-row-gap: 20px;
  }
`;

function About() {
  return (
    <>
      <Wrapper>
        <div className="image-container">
          <img className="image" src="./profile.png" alt="my profile image" />
        </div>
        <div className="info">
          <h1 className="title">
            <span>About Me</span>
          </h1>
          <p className="desc">
            Hello, My name is Suprada Tripathy. I am a self-taught front-end web
            developer. I am passionate about web-development and have worked on
            a variety of projects. I am also intrested in UI/UX.I enjoy building
            intercative web apps and responsive design. With every line of code
            I strive to make web a beautiful place.
          </p>
          <a className="link" href="#">
            More about me <FaChevronRight className="icon" />
          </a>
        </div>
      </Wrapper>
    </>
  );
}

export default About;
