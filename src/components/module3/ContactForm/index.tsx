import styles from "./style.module.css";
import ButtonAction from "../../general/ButtonAction/indesx";
import { Container } from "react-bootstrap";

type Props = {};

function LoginForm({}: Props) {
  return (
    <>
      <Container fluid>
        <form>
          <div className="my-2">
            <h3 style={{ fontWeight: "1000", fontSize: "1.2rem" }}>
              Contact Us
            </h3>
            <label htmlFor="emailSlot" className="form-label"></label>
            <input
              required
              name="name"
              type="name"
              className={`form-control ${styles.loginSlot}`}
              id="nameSlotLogin"
              placeholder="Your Name"
            />
          </div>

          <div className="my-2">
            <label htmlFor="emailSlot" className="form-label"></label>
            <input
              required
              name="email"
              type="email"
              className={`form-control ${styles.loginSlot}`}
              id="emailSlotLogin"
              placeholder="Your Email"
            />
          </div>

          <div className="my-2">
            <label htmlFor="emailSlot" className="form-label"></label>
            <textarea
              className={`form-control mb-4 form-control ${styles.loginSlot}`}
              aria-label="With textarea"
              placeholder="Your Message"
              style={{ height: "20vh" }}
            />
          </div>

          <div className="col-lg-5">
            <ButtonAction text="Send" type="submit" />
          </div>
        </form>
      </Container>
    </>
  );
}

export default LoginForm;
