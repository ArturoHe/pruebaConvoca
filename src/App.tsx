import "./App.css";
import Background from "./components/Background";
import NavBar from "./components/general/NavBar";
import ContactForm from "./components/module3/ContactForm";
import Footer from "./components/module3/Footer";
import SecondModule from "./functionalities/SecondModule";
import ThirdModule from "./functionalities/ThirdModule";

function App() {
  return (
    <>
      <NavBar />
      <Background />
      <SecondModule />
      <ThirdModule />
    </>
  );
}

export default App;

/* */
