import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

function BasicExample() {
  return (
    <Container fluid>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Container className="order-2">
            <Navbar.Brand href="#home">
              <img src="logo.png" alt="" />
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar.Brand>
          </Container>

          <Container className="order-1">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#product">Product</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>

          <Container className="order-3 d-none d-lg-block">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <IoLogoTwitter />
                </Nav.Link>
                <Nav.Link href="#link">
                  <IoLogoFacebook />
                </Nav.Link>
                <Nav.Link href="#link">
                  <IoLogoLinkedin />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </Container>
  );
}

export default BasicExample;
