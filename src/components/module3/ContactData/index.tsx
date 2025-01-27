import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../../assets/module3/icon1Pin.svg";
import icon2 from "../../../assets/module3/icon2Mov.svg";
import icon3 from "../../../assets/module3/icon3Mail.svg";

type Props = {};

function index({}: Props) {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={4}>
          <div>
            <img src={icon1} alt="" className="mb-3"></img>

            <h6 style={{ fontSize: "0.71rem", fontWeight: 400 }}>
              6386 Spring St undefined Anchorage, Georgia 12473 United States
            </h6>
          </div>
        </Col>
        <Col lg={4}>
          <img src={icon2} alt="" className="mb-3" />
          <h6 style={{ fontSize: "0.71rem", fontWeight: 400 }}>
            (843) 555-0130
          </h6>
        </Col>
        <Col lg={4}>
          <img src={icon3} alt="" className="mb-3" />

          <h6 style={{ fontSize: "0.71rem", fontWeight: 400 }}>
            willie.jennings@example.com
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default index;
