import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EncabezadoTarjetaCita from "./EncabezadoTarjetaCita";
import FormularioTarjetaCita from "./FormularioTarjetaCita";

const TarjetaCita = ({ cita, borrarCita }) => {
  return (
    <Card className="cardQuote pb-3">
      <EncabezadoTarjetaCita
        nombreMascota={cita["nombreMascota"]}
        nombreDuenio={cita["nombreDuenio"]}
      />
      <FormularioTarjetaCita
        fecha={cita["fecha"]}
        hora={cita["hora"]}
        sintomas={cita["sintomas"]}
      />
      <Button
        className="btnBorrar border-0 px-5 py-3 mx-auto"
        onClick={() =>
          borrarCita(cita)
        }
      >
        Borrar
      </Button>
    </Card>
  );
};

export default TarjetaCita;
