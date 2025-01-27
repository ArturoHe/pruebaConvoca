import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";

import ButtonAction from "../general/ButtonAction/indesx";

type Props = {};

function index({}: Props) {
  return (
    <>
      <div className={`${styles.background}`} style={{ position: "relative" }}>
        <div
          className="container"
          style={{ textAlign: "center", color: "white" }}
        >
          <Container style={{ paddingTop: "20vh" }}>
            <Row>
              <Col></Col>
              <Col xs={12} md={8} lg={5}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                  The best products start with Figma
                </h1>
              </Col>
              <Col></Col>
            </Row>
          </Container>

          <Container>
            <Container className="my-5">
              <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                  <h4 style={{ fontWeight: 300 }}>
                    <div className="px-5">
                      Most calendars are designed for teams.
                    </div>
                    <div className="d-none d-sm-block">
                      Slate is designed for freelancers
                    </div>
                  </h4>
                </Col>
                <Col lg={1}></Col>
              </Row>
            </Container>
          </Container>

          <div>
            <Container>
              <Row style={{ justifyContent: "center" }}>
                <Col xs={5} md={4} lg={2}>
                  <ButtonAction text="Try For Free" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;

/*<div className={`${styles.triangleLeft}`}></div>*/
