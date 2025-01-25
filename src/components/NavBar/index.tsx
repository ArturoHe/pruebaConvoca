import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

function BasicExample() {
  return (
    <Container
      fluid
      className="sticky-top"
      style={{ minHeight: "10vh", maxHeight: "10vh" }}
    >
      <Navbar expand="lg">
        <Container className="d-flex justify-content-center ">
          <Row>
            <Col className="order-2">
              <Container>
                <Navbar.Brand href="#home">
                  <img src="logo.png" alt="" />
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar.Brand>
              </Container>
            </Col>

            <Col
              className="order-1"
              style={{ fontSize: "1.2rem", alignContent: "center" }}
            >
              <Container className="">
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" style={{ color: "white" }}>
                      Home
                    </Nav.Link>
                    <Nav.Link href="#product" style={{ color: "white" }}>
                      Product
                    </Nav.Link>
                    <Nav.Link href="#pricing" style={{ color: "white" }}>
                      Pricing
                    </Nav.Link>
                    <Nav.Link href="#about" style={{ color: "white" }}>
                      About
                    </Nav.Link>
                    <Nav.Link href="#contact" style={{ color: "white" }}>
                      Contact
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Col>

            <Col
              className="order-3"
              style={{
                fontSize: "1.2rem",
                alignContent: "center",
                accentColor: "white",
              }}
            >
              <Container className="d-none d-lg-block">
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">
                      <IoLogoTwitter style={{ color: "white" }} />
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <IoLogoFacebook style={{ color: "white" }} />
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <IoLogoLinkedin style={{ color: "white" }} />
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Container>
  );
}

export default BasicExample;
