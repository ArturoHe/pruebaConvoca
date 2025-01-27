import { Col, Container, Row } from "react-bootstrap";

type Props = {};

function index({}: Props) {
  return (
    <>
      <Container>
        <Row
          className="justify-content-center"
          style={{ color: "white", fontSize: "0.7rem" }}
        >
          <Col lg={3}>
            <h3 style={{ fontSize: "1rem" }} className="mb-4">
              Pages
            </h3>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Home
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Product
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Pricing
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                About
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Contact
              </a>
            </p>
          </Col>
          <Col lg={3}>
            <h3 style={{ fontSize: "1rem" }} className="mb-4">
              Tomothy{" "}
            </h3>

            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Eleanor Edwards
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Ted Robertson
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Annette Russell
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Jennie Mckinney
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Gloria Richards
              </a>
            </p>
          </Col>
          <Col lg={3}>
            <h3 style={{ fontSize: "1rem" }} className="mb-4">
              Jane Black
            </h3>

            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Philip Jones
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Product
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Colleen Russell
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Marvin Hawkins
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Bruce Simmmons
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default index;
