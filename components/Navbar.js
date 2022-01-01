import { Container } from "../styles/NavbarStyle";
import Head from "next/head";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <Head>
        <title>Suprada Tripathy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <header>
          <h1 className="logo">Suprada</h1>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                <Link href="/homepage">Home</Link>
              </li>
              <li>
                <Link href="/aboutpage">About</Link>
              </li>
              <li>
                <Link href="/projectpage">Projects</Link>
              </li>
              <li>
                <Link href="/contactpage">Contact</Link>
              </li>
            </ul>
          </nav>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
        </header>
      </Container>
    </>
  );
}

export default Navbar;
