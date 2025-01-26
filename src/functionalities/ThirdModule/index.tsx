import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../components/module3/ContactForm";
import styles from "./style.module.css";
import ContactData from "../../components/module3/ContactData";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

import map from "../../assets/module3/map.png";
import Footer from "../../components/module3/Footer";

type Props = {};

function index({}: Props) {
  return (
    <>
      <div style={{ height: "100vh", marginTop: "15vh" }}>
        <div className="text-center">
          <div style={{ maxWidth: "30vw", margin: "auto" }}>
            <h2 className="my-5">Contact Us</h2>
            <h4 className="my-5">
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </h4>
          </div>
        </div>
        <Container fluid className="my-5">
          <Row>
            <Col md={6}>
              <Container className="d-flex justify-content-center">
                <div className={`text-center ${styles.CardContact} `}>
                  <ContactForm />
                </div>
              </Container>
            </Col>
            <Col md={6}>
              <Container className="text-center">
                <ContactData />
              </Container>

              <div className="align-items-center d-flex justify-content-center my-5">
                <img
                  src={map}
                  alt="map"
                  className={styles.map}
                  style={{ width: "25vw" }}
                />
              </div>

              <Container>
                <Row>
                  <Col lg={1} style={{ fontSize: "1.5rem" }}>
                    <IoLogoTwitter />
                  </Col>
                  <Col lg={1} style={{ fontSize: "1.5rem" }}>
                    <IoLogoFacebook />
                  </Col>
                  <Col lg={1} style={{ fontSize: "1.5rem" }}>
                    <IoLogoLinkedin />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ backgroundColor: "#252B42" }}>
          <div>
            <Footer />
          </div>
        </Container>
      </div>
    </>
  );
}

export default index;
