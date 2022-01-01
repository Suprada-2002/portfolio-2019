import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";
import Nav from "../components/Navbar";

const ProjectWrapper = styled.div`
  height: fit-content;
  width: 100vw;
  background-color: var(--dark_black);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 80px;

  .info {
    height: fit-content;
    color: var(--light_blue);
    text-align: center;
    align-items: center;

    h2 {
      font-weight: 800;
      font-size: 2rem;

      span {
        border-bottom: 2px solid var(--white);
      }
    }
  }

  .container {
    width: 90%;
    max-width: 1000px;
    margin: 50px auto;
    display: flex;
    background-color: var(--dark_black);
    align-items: center;
    justify-content: center;
    padding-bottom: 1.5rem;

    .left {
      width: 60%;
      height: 600px;
      background-color: white;
      border-radius: 8px;

      img {
        border: 1px solid var(--white);
        max-width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }

    .right {
      width: 40%;
      min-height: 400px;
      background-color: var(--light_black);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;
      border-radius: 8px;
      color: var(--dark_blue);
      margin-left: -150px;

      .content {
        h3 {
          border-bottom: 2px solid var(--dark_blue);
          font-size: 1.4rem;
          width: 34%;
        }

        p {
          font-size: 1rem;
          font-weight: 300;
        }

        a {
          border-bottom: 1px solid var(--dark_blue);
          margin-right: 0.5rem;
          color: var(--white);
          text-decoration: none;
          font-weight: 600;

          &:hover {
            color: var(--light_blue);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .container {
      flex-direction: column;
      width: 100%;
      margin: 0 20px;

      .left {
        width: 100%;
        height: 400px;
      }

      .right {
        width: 90%;
        margin: 0;
        margin-top: -100px;
      }
    }
  }
`;

const Footer = styled.div`
  height: fit-content;
  width: 100vw;
  background-color: var(--light_blue);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;

  a {
    text-decoration: none;
    color: var(--dark_black);
    font-weight: 600;

    &:hover {
      color: var(--white);
    }
  }
`;

function ProjectPage() {
  return (
    <>
      <Nav />
      <ProjectWrapper>
        <div className="info">
          <h2>
            <span>Projects</span>
          </h2>
          <p> I have worked on a bunch of projects ,Check out some of them</p>
        </div>
        <div className="container">
          <div className="left">
            <img src="./sortify.png" />
          </div>

          <div className="right">
            <div className="content">
              <h3>Sortify</h3>
              <p>
                This is a web app for visalizing a bunch of Sorting ALgorithms.
                ALgorithms include Bubble sort, Selection Sort, Insertion Sort,
                Heao Sort
              </p>

              <a href="https://github.com/Suprada-2002/sortify">Code</a>
              <a href="https://suprada-2002.github.io/sortify/">View Live</a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="left">
            <img src="./crypto.png" />
          </div>

          <div className="right">
            <div className="content">
              <h3>Crypto Currency Tracker</h3>
              <p>This is a web app for tracking prices of crypto curriences.</p>
              <div className="code-link">
                <a href="https://github.com/Suprada-2002/crypto-currency-tracker">
                  Code
                </a>
                <a href="https://coin-tracker-app.netlify.app/">View Live</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="left">
            <img src="./wheather.png" />
          </div>

          <div className="right">
            <div className="content">
              <h3>Weather App</h3>
              <p>
                This is a simple weather app, made using vanila js, html and css
              </p>
              <div className="code-link">
                <a href="https://github.com/Suprada-2002/Weather-App">Code</a>
                <a href="https://suprada-2002.github.io/Weather-App/">
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="left">
            <img src="/coffee.png" />
          </div>

          <div className="right">
            <div className="content">
              <h3>Responsive Coffee Website</h3>
              <p>This is a responsive website design, made using nextjs.</p>
              <div className="code-link">
                <a href="https://github.com/Suprada-2002/responsive_coffee_website">
                  Code
                </a>
                <a href="https://suprada-2002.github.io/responsive_coffee_website/">
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer>
          <a href="https://github.com/Suprada-2002">
            For more project check out my github profile <FaAngleDoubleRight />
          </a>
        </Footer>
      </ProjectWrapper>
    </>
  );
}

export default ProjectPage;
