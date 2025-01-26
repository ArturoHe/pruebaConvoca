import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../../assets/module3/icon1Pin.svg";
import icon2 from "../../../assets/module3/icon2Mov.svg";
import icon3 from "../../../assets/module3/icon3Mail.svg";

type Props = {};

function index({}: Props) {
  return (
    <Container>
      <Row>
        <Col>
          <img src={icon1} alt="" className="mb-3" />

          <h6>
            6386 Spring St undefined Anchorage, Georgia 12473 United States
          </h6>
        </Col>
        <Col>
          <img src={icon2} alt="" className="mb-3" />

          <h6>(843) 555-0130</h6>
        </Col>
        <Col>
          <img src={icon3} alt="" className="mb-3" />

          <h6 className="align-middle">willie.jennings@example.com</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default index;
