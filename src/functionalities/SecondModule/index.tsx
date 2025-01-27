import { Container } from "react-bootstrap";

import video1 from "../../assets/module2/video1Image.jpg";
import video2 from "../../assets/module2/video2Image.jpeg";

import Features from "../../components/module2/Features";
import VideoPlay from "../../components/module2/VideoPlay";

type Props = {};

function index({}: Props) {
  return (
    <>
      <div className="pt-4">
        <Container className="text-center">
          <h2 style={{ fontSize: "2.5rem" }}>Features</h2>

          <Container className="my-5">
            <h4 style={{ fontWeight: 300, color: "#374754" }}>
              <div className="px-5">Most calendars are designed for teams.</div>
              <div className="d-none d-sm-block">
                Slate is designed for freelancers
              </div>
            </h4>
          </Container>
        </Container>

        <div className="d-block d-sm-none">
          <VideoPlay image={video1} />
        </div>

        <Features />

        <div className="d-none d-sm-block">
          <VideoPlay image={video2} />
        </div>
      </div>
    </>
  );
}

export default index;
