import { Col, Container, Row } from "react-bootstrap";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

type Props = { color: string; size: number };

function index({ color, size }: Props) {
  return (
    <Container fluid>
      <Row style={{ fontSize: `${size}rem`, color: color }}>
        <Col xs={2} lg={1} className="mx-2">
          <IoLogoTwitter />
        </Col>
        <Col xs={2} lg={1} className="mx-2">
          <IoLogoFacebook />
        </Col>
        <Col xs={2} lg={1} className="mx-2">
          <IoLogoLinkedin />
        </Col>
      </Row>
    </Container>
  );
}

export default index;
