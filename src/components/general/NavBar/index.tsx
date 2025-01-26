import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import "./style.css";

function BasicExample() {
  return (
    <Navbar fixed="top" expand="lg">
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
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#product">Product</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
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
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
