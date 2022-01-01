import { Container } from "../styles/NavbarStyle";
import Head from "next/head";

function Navbar() {
  return (
    <>
      <Head>
        <title>Suprada Tripathy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <header>
          <h1 class="logo">Suprada</h1>
          <input type="checkbox" id="nav-toggle" class="nav-toggle" />
          <nav>
            <ul>
              <li>
                <a href="/homepage">Home</a>
              </li>
              <li>
                <a href="/aboutpage">About</a>
              </li>
              <li>
                <a href="/projectpage">Projects</a>
              </li>
              <li>
                <a href="/contactpage">Contact</a>
              </li>
            </ul>
          </nav>
          <label for="nav-toggle" class="nav-toggle-label">
            <span></span>
          </label>
        </header>
      </Container>
    </>
  );
}

export default Navbar;
