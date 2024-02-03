import {Form, Row, Col} from "react-bootstrap";

const FormCard = () => {
  return (
    <Form className="formCard mb-3 d-flex flex-column py-4 px-3">
      <Form.Group as={Row} className="mb-2 d-flex align-items-center ">
        <Form.Label column sm="4">
          Fecha:
        </Form.Label>
        <Col sm="8">
          <Form.Control type="date" disabled />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2 d-flex align-items-center ">
        <Form.Label column sm="4">
          Hora:
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" disabled placeholder="hh:mm" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2 d-flex align-items-center ">
        <Form.Label column sm="4">
          Síntomas:
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" disabled placeholder="síntomas" />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default FormCard;
