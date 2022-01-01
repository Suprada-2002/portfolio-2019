import styled from "styled-components";
import Nav from "../components/Navbar";
import Skill from "../components/Skills";

const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;
  color: var(--white);
  background-image: url("./about_back.svg");
  display: flex;
  justify-content: space-around;
  gap: 40px;
  padding: 80px 80px;

  .info {
    color: var(--white);

    .title {
      padding-top: 1.8rem;
      padding-bottom: 1rem;
      text-align: center;
      font-weight: 800;
      font-size: 1.8rem;
      span {
        border-bottom: 3px solid var(--light_blue);
      }
    }
    .desc {
      font-size: 1rem;
      font-weight: 300;
    }

    ul {
      font-weight: 300;

      span {
        font-weight: 400;
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
    height: 100%;
    display: grid;
    text-align: center;
    grid-row-gap: 20px;
  }
`;

const Color = styled.div`
  background-color: var(--dark_black);
`;

function AboutPage() {
  return (
    <>
      <Nav />
      <Color>
        <Wrapper>
          <div className="image-container">
            <img className="image" src="./profile.png" alt="my profile image" />
          </div>
          <div className="info">
            <h1 className="title">
              <span>About Me</span>
            </h1>
            <p className="desc">
              Hello, My name is Suprada Tripathy. I am a self-taught front-end
              web developer. I am passionate about web-development and have
              worked on a variety of projects. I am also intrested in UI/UX.I
              enjoy building intercative web apps and responsive design. With
              every line of code I strive to make web a beautiful place.
            </p>
            <ul>
              <li>
                <span>Graduated from: </span> Gandhi institue of university and
                technology
              </li>
              <li>
                <span>Finished 12th from:</span> Govt. Autonomous University,
                Kalahandi
              </li>
              <li>
                <span>Finished 10th from: </span>Sri Sathya sai vidya mandir
              </li>
            </ul>
          </div>
        </Wrapper>
        <Skill />
      </Color>
    </>
  );
}

export default AboutPage;
