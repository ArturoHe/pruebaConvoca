import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../components/module3/ContactForm";
import styles from "./style.module.css";
import ContactData from "../../components/module3/ContactData";

import map from "../../assets/module3/map.png";
import Footer from "../../components/module3/Footer";
import SocialBar from "../../components/general/SocialBar";

import icon1 from "../../assets/module3/icon1Pin.svg";
import icon2 from "../../assets/module3/icon2Mov.svg";
import icon3 from "../../assets/module3/icon3Mail.svg";

type Props = {};

function index({}: Props) {
  return (
    <>
      <div style={{ height: "100vh", marginTop: "15vh" }}>
        <div className="text-center">
          <h2 style={{ fontSize: "2.5rem" }}>Contact Us</h2>

          <Container>
            <Row>
              <Col xs={7} className="mx-auto my-4">
                <h4 style={{ fontWeight: 400, color: "#374754" }}>
                  <div>Most calendars are designed for teams.</div>
                  <div className="d-none d-sm-block">
                    Slate is designed for freelancers
                  </div>
                </h4>
              </Col>
            </Row>
          </Container>

          <Container className="d-block d-sm-none">
            <Row>
              <Col xs={12} className="d-flex mx-4 justify-content-center">
                <div>
                  <SocialBar color="#2091F9" size={3} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="d-block d-sm-none">
          <Row>
            <Col xs={12} className="mx-5 my-5">
              <Row className="mb-4">
                <Col xs={1}>
                  <img src={icon1} alt="" className="mb-3"></img>
                </Col>
                <Col xs={8}>
                  <h6 style={{ fontSize: "0.8rem", fontWeight: 400 }}>
                    6386 Spring St undefined Anchorage, Georgia 12473 United
                    States
                  </h6>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col xs={1}>
                  <img src={icon2} alt="" className="mb-3" />
                </Col>
                <Col xs={8}>
                  <h6 style={{ fontSize: "0.8rem", fontWeight: 400 }}>
                    (843) 555-0130
                  </h6>
                </Col>
              </Row>

              <Row>
                <Col xs={1}>
                  <img src={icon3} alt="" className="mb-3" />
                </Col>
                <Col xs={8}>
                  <h6 style={{ fontSize: "0.8rem", fontWeight: 400 }}>
                    willie.jennings@example.com States
                  </h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container className="d-block d-sm-none my-5">
          <Row>
            <Col xs={5}>
              <div className={`shadow text-center ${styles.CardContact}`}>
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="my-3 d-none d-sm-block">
          <Row className="mx-5 pt-2">
            <Col md={6}>
              <Container className="d-flex justify-content-center">
                <div className={`shadow text-center ${styles.CardContact} `}>
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
              <div>
                <SocialBar color="#2091F9" size={2} />
              </div>
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
