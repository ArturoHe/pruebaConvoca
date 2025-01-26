import { Container } from "react-bootstrap";

import playButton from "../../../assets/module2/playButton.svg";

type Props = { image: string };

function index({ image }: Props) {
  return (
    <Container className="text-center position-relative">
      <div className="d-flex justify-content-center position-relative">
        <img
          className="shadow"
          src={image}
          alt=""
          style={{
            minWidth: "40vw",
            maxHeight: "50vh",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "30px",
          }}
        />
      </div>
      <img
        className=" position-absolute top-50 start-50 translate-middle"
        style={{ height: "4rem" }}
        src={playButton}
        alt=""
      />
    </Container>
  );
}

export default index;
