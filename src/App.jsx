import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TituloPrincipal from "./components/TituloPrincipal";
import Footer from "./components/Footer";
import "./App.css";
import TituloVeterinaria from "./components/TituloVeterinaria";
import FormularioVeterinaria from "./components/FormularioVeterinaria";

function App() {
  return (
    <>
      <Container className="my-2 mainPage">
        <TituloPrincipal></TituloPrincipal>
        <TituloVeterinaria/>
        <FormularioVeterinaria/>
      </Container>
      <Footer />
    </>
  );
}

export default App;
