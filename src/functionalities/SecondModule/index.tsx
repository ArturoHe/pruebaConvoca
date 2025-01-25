import React from "react";
import { Col, Container, Row } from "react-bootstrap";

type Props = {};

function index({}: Props) {
  return (
    <>
      <Container className="text-center mt-2">
        <h2>Second Module</h2>

        <div className="my-5">
          <h5>
            Most calendars are designed for teams. <br />
            Slate is designed for freelancers
          </h5>
        </div>
      </Container>

      <Container className="text-center my-5">
        <Row>
          <Col>
            <Container>
              <div>imagen</div>
              <div>titulo</div>
              <div>descr</div>
            </Container>
          </Col>
          <Col>
            <Container>
              <div>imagen</div>
              <div>titulo</div>
              <div>descr</div>
            </Container>
          </Col>
          <Col>
            <Container>
              <div>imagen</div>
              <div>titulo</div>
              <div>descr</div>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container
        className="text-center"
        style={{ maxheight: "10vh", bacgroundColor: "black" }}
      >
        <img src="videImage.jpeg" alt="" />
      </Container>
    </>
  );
}

export default index;
