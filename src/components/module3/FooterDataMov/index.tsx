import { Container } from "react-bootstrap";

type Props = {};

function index({}: Props) {
  return (
    <>
      <Container style={{ color: "white" }}>
        <div className="mb-4">
          <h3>Annette Steward</h3>
        </div>

        <div>
          <p>Jennie Cooper</p>
          <p>Julie Henry</p>
          <p>Johnny Murphy</p>
          <p>Gregory Mccoy</p>
          <p>Marvin Mckinney</p>
        </div>
      </Container>
    </>
  );
}

export default index;
