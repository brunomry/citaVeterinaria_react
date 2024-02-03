import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TituloPrincipal from "./components/TituloPrincipal";
import Footer from "./components/Footer";
import "./App.css";
import TituloVeterinaria from "./components/TituloVeterinaria";
import FormularioVeterinaria from "./components/FormularioVeterinaria";
import ListadoCitas from "./components/ListadoCitas";

function App() {
  return (
    <>
      <Container className="my-2 mainPage">
        <TituloPrincipal></TituloPrincipal>
        <TituloVeterinaria/>
        <FormularioVeterinaria/>
        <ListadoCitas/>
      </Container>
      <Footer />
    </>
  );
}

export default App;
