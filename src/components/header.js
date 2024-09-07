import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height:'45px',
              width: "55px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              objectFit: "contain",
              marginRight: "15px",
            }}
            src={require("../assets/mainLogo.png")}
          />
          <h3 style={{ color: "white", position: "relative", top: "10px" }}>
            <b>Golden Bird</b>
          </h3>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="/map">Explore Map</Nav.Link>
            <Nav.Link href="/catagories">Catagories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;