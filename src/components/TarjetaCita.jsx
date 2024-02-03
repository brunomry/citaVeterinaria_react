import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderCard from "./EncabezadoTarjetaCita";
import FormCard from "./FormularioTarjetaCita";

const TarjetaCita = () => {
  return (
    <Card className="cardQuote pb-3">
      <HeaderCard />
      <FormCard />
      <Button className="btnBorrar border-0 px-5 py-3 mx-auto">Borrar</Button>
    </Card>
  );
};

export default TarjetaCita;
