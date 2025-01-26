import React from "react";
import { Col, Container, Row } from "react-bootstrap";

type Props = {};

function index({}: Props) {
  return (
    <>
      <h2>Contact Us</h2>

      <h4>
        Most calendars are designed for teams. Slate is designed for freelancers{" "}
      </h4>

      <Row>
        <Col>
          <div
            style={{
              height: "20rem",
              width: "15rem",
              backgroundColor: "gray",
            }}
          >
            <p>Aqui va el Form</p>
          </div>
        </Col>

        <Col>
          <Container>
            <Row>
              <Col>
                <div
                  style={{
                    height: "2rem",
                    width: "2rem",
                    backgroundColor: "black",
                  }}
                ></div>
                <h6>
                  6386 Spring St undefined Anchorage, Georgia 12473 United
                  States
                </h6>
              </Col>
              <Col>
                <div
                  style={{
                    height: "2rem",
                    width: "2rem",
                    backgroundColor: "black",
                  }}
                ></div>
                <h6>(843) 555-0130</h6>
              </Col>
              <Col>
                <div
                  style={{
                    height: "2rem",
                    width: "2rem",
                    backgroundColor: "black",
                  }}
                ></div>
                <h6>willie.jennings@example.com</h6>
              </Col>
            </Row>
          </Container>
          <Container>
            <div
              style={{
                height: "20rem",
                width: "30rem",
                backgroundColor: "black",
              }}
            ></div>
          </Container>
          <Container>
            <Row>
              <Col lg={1}>
                <p>fb</p>
              </Col>
              <Col lg={1}>
                <p>ins</p>
              </Col>
              <Col lg={1}>
                <p>yt</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <div style={{ height: "20rem", width: "100vw", backgroundColor: "gray" }}>
        <Container className="my-5">
          <Row>
            <Col>
              <Row>
                <Col>
                  <p>1 izq</p>
                </Col>
                <Col>
                  <p>2 izq</p>
                </Col>
                <Col>
                  <p>3 izq</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <p>Derecha 1</p>
              <p>Derecha 2</p>
              <Container>
                <Row>
                  <Col lg={1}>
                    <p>fb</p>
                  </Col>
                  <Col lg={1}>
                    <p>ins</p>
                  </Col>
                  <Col lg={1}>
                    <p>yt</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default index;
