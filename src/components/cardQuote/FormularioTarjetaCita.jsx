import {Form, Row, Col} from "react-bootstrap";

const FormularioTarjetaCita = ({fecha, hora, sintomas}) => {
  return (
    <Form className="formCard mb-3 d-flex flex-column py-4 px-3">
      <Form.Group as={Row} className="mb-2 d-flex align-items-center ">
        <Form.Label column sm="4">
          Fecha:
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" disabled value={fecha}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2 d-flex align-items-center ">
        <Form.Label column sm="4">
          Hora:
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" disabled value={hora}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2 d-flex align-items-center ">
        <Form.Label column sm="4">
          Síntomas:
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" disabled value={sintomas} />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default FormularioTarjetaCita;
