import { Button, Form } from "react-bootstrap";

const FormularioVeterinaria = () => {
  return (
    <section className="sectionForm mx-auto pt-4 px-0 rounded-3 bg-white">
      <Form className="mb-5">
        <h4 className="mb-4 ms-5">Llenar el formulario para crear una cita</h4>
        <div className="mb-3 containerInputs py-5 px-3 px-sm-5">
          <Form.Group className="mb-3 d-flex flex-column justify-content-start flex-lg-row justify-content-lg-between align-items-lg-center">
            <Form.Label className="lead fw-medium">
              Nombre de Mascota:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="nombre de mascota"
              className="py-sm-3 input"
              minLength={3}
              maxLength={50}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex flex-column justify-content-start flex-lg-row justify-content-lg-between align-items-lg-center">
            <Form.Label className="lead fw-medium">Nombre de Dueño:</Form.Label>
            <Form.Control
              type="text"
              placeholder="nombre de dueño"
              className="py-sm-3 input"
              minLength={3}
              maxLength={50}
              required
            />
          </Form.Group>
          <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3 justify-content-between mb-3">
            <Form.Group className="groupDate d-flex flex-column justify-content-start flex-lg-row gap-lg-4 justify-content-lg-between align-items-lg-center">
              <Form.Label className="lead fw-medium">Fecha:</Form.Label>
              <Form.Control
                type="date"
                className="py-sm-3 inputDate"
                minLength={8}
                maxLength={8}
                required
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column gap-lg-4 justify-content-start flex-lg-row justify-content-lg-center align-items-lg-center">
              <Form.Label className="lead fw-medium">Hora:</Form.Label>
              <Form.Control
                type="text"
                placeholder="hh:mm"
                className="py-sm-3"
                minLength={3}
                maxLength={265}
                required
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3 d-flex flex-column justify-content-start flex-lg-row justify-content-lg-between align-items-lg-center">
            <Form.Label className="lead fw-medium">Síntomas:</Form.Label>
            <Form.Control
              type="text"
              placeholder="describir síntomas"
              className="py-sm-3 input"
              minLength={3}
              maxLength={50}
              required
            />
          </Form.Group>
        </div>
        <div className="text-center">
        <Button
          className="btnEnviar border-0 px-5 mt-2 fs-5 py-sm-3 mb-4"
          type="submit"
        >
          Agregar nueva cita
        </Button>
        </div>    
      </Form>
    </section>
  );
};

export default FormularioVeterinaria;
