import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EncabezadoTarjetaCita from "./EncabezadoTarjetaCita";
import FormularioTarjetaCita from "./FormularioTarjetaCita";

const TarjetaCita = ({ paciente, borrarPaciente }) => {
  return (
    <Card className="cardQuote pb-3">
      <EncabezadoTarjetaCita
        nombreMascota={paciente["nombreMascota"]}
        nombreDuenio={paciente["nombreDuenio"]}
      />
      <FormularioTarjetaCita
        fecha={paciente["fecha"]}
        hora={paciente["hora"]}
        sintomas={paciente["sintomas"]}
      />
      <Button
        className="btnBorrar border-0 px-5 py-3 mx-auto"
        onClick={() =>
          borrarPaciente(paciente)
        }
      >
        Borrar
      </Button>
    </Card>
  );
};

export default TarjetaCita;
