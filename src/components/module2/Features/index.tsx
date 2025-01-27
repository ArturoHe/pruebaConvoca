import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "../FeatureCard";
import icon1 from "../../../assets/module2/feature1Icon.svg";
import icon2 from "../../../assets/module2/feature2Icon.svg";
import icon3 from "../../../assets/module2/feature3Icon.svg";

type Props = {};

function index({}: Props) {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center" style={{ gap: "1rem" }}>
        <Col xs={9} sm={7} md={4} lg={3} className="my-4">
          <FeatureCard
            image={icon1}
            title="OpenType features Variable fonts"
            description="Slate helps you see how many more days you need to work to reach your financial goal."
          />
        </Col>
        <Col xs={8} sm={7} md={4} lg={3} className="my-4">
          <FeatureCard
            image={icon2}
            title="Design with real data"
            description="Slate helps you see how many more days you need to work to
          reach your financial goal."
          />
        </Col>
        <Col xs={8} sm={7} md={4} lg={3} className="my-4">
          <FeatureCard
            image={icon3}
            title="Fastest way to take action"
            description="Slate helps you see how many more days you need to work to
          reach your financial goal."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default index;
