import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../NavBar";
import ButtonAction from "../ButtonAction/indesx";

type Props = {};

function index({}: Props) {
  return (
    <>
      <div className={`${styles.background}`}>
        <NavBar />

        <div
          className="container"
          style={{ minHeight: "65vh", textAlign: "center", color: "white" }}
        >
          <div style={{ paddingTop: "10vh" }}>
            <h1>
              The best products <br />
              start with Figma
            </h1>
          </div>

          <div style={{ paddingTop: "10vh" }}>
            <h5>
              Most calendars are designed for teams. Slate is designed <br />
              for freelancers
            </h5>
          </div>

          <div style={{ paddingTop: "10vh" }}>
            <Container>
              <Row style={{ justifyContent: "center" }}>
                <Col xs={5} md={4} lg={2}>
                  <ButtonAction text="Try For Free" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="d-flex flex-row">
          <div className={`${styles.triangleLeft}`}></div>
          <div className={`${styles.triangleRight}`}></div>
        </div>
        <div className={`${styles.rectangle}`}></div>
      </div>
    </>
  );
}

export default index;
