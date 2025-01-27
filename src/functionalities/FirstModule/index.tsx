import Background from "../../components/Background";
import NavBar from "../../components/general/NavBar";

type Props = {};

function index({}: Props) {
  return (
    <>
      <div className="position-relative">
        <div className="z-1 position-absolute w-100">
          <NavBar />
        </div>
        <Background />
      </div>
    </>
  );
}

export default index;
