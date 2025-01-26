import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

import img1 from "../../../assets/module3/icon1Pin.svg";
import img2 from "../../../assets/module3/icon2Mov.svg";

type Props = {};

function index({}: Props) {
  return (
    <Container className="text-left py-5">
      <Row>
        <Col lg={6}>
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
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Product
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Contact
                  </a>
                </p>
              </Col>
              <Col lg={3}>
                <h3 style={{ fontSize: "1rem" }} className="mb-4">
                  Tomothy{" "}
                </h3>

                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Eleanor Edwards
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Ted Robertson
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Annette Russell
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Jennie Mckinney
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Gloria Richards
                  </a>
                </p>
              </Col>
              <Col lg={3}>
                <h3 style={{ fontSize: "1rem" }} className="mb-4">
                  Jane Black
                </h3>

                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Philip Jones
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Product
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Colleen Russell
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Marvin Hawkins
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Bruce Simmmons
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col lg={6} style={{ color: "white" }}>
          <p style={{ fontSize: "0.8rem" }} className="mb-4">
            <img className="me-3" src={img1} alt="" />
            7480 Mockingbird Hill undefined
          </p>
          <p style={{ fontSize: "0.8rem" }} className="mb-4">
            <img className="me-3" src={img2} alt="" />
            (239) 555-0108
          </p>
          <Container>
            <Row>
              <Col lg={1} style={{ fontSize: "1.5rem" }}>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  <IoLogoTwitter />
                </a>
              </Col>
              <Col lg={1} style={{ fontSize: "1.5rem" }}>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  <IoLogoFacebook />
                </a>
              </Col>
              <Col lg={1} style={{ fontSize: "1.5rem" }}>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  <IoLogoLinkedin />
                </a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default index;
