import { Col, Container, Row } from "react-bootstrap";

import img1 from "../../../assets/module3/icon1Pin.svg";
import img2 from "../../../assets/module3/icon2Mov.svg";
import SocialBar from "../../general/SocialBar";
import FooterData from "../FooterData";
import FooterDataMov from "../FooterDataMov";

type Props = {};

function index({}: Props) {
  return (
    <Container className="text-left py-5">
      <Row>
        <Col lg={6} className="d-none d-sm-block">
          <FooterData />
        </Col>

        <Col className="d-block d-sm-none text-center">
          <div className="pb-5">
            <FooterDataMov />
          </div>
          <div className="pb-5">
            <FooterDataMov />
          </div>
          <div className="pb-5">
            <FooterDataMov />
          </div>
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

          <Container className="d-none d-sm-block px-0">
            <SocialBar color="#FFFFFF" size={2} />
          </Container>

          <Container fluid className="d-block d-sm-none mx-5">
            <SocialBar color="#FFFFFF" size={2} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default index;
