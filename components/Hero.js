import styled from "styled-components";
import First from "./First";
import Nav from "./Navbar";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  position: absolute;
  top: 0;
  left: 0;
`;

function Hero() {
  return (
    <>
      <Container>
        <Nav />
        <First />
      </Container>
    </>
  );
}

export default Hero;
