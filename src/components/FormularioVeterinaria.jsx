import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListadoCitas from "./ListadoCitas";
import { validarNombre, validarSintomas } from "./js/validaciones.js";
import Swal from "sweetalert2";

const FormularioVeterinaria = () => {
  const [titulo, setTitulo] = useState("No hay citas");
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const citasLocalStorage = JSON.parse(localStorage.getItem("citasKey")) || [];
  const [citas, setCitas] = useState(citasLocalStorage);

  useEffect(() => {
    localStorage.setItem("citasKey", JSON.stringify(citas));
    if (citas.length !== 0) {
      setTitulo("Administra las citas aquí");
    }else{
      setTitulo("No hay citas");
    }
  }, [citas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validarNombre(nombreMascota) &&
      validarNombre(nombreDuenio) &&
      validarSintomas(sintomas)
    ) {
      const nuevaCita = {
        nombreMascota: nombreMascota,
        nombreDuenio: nombreDuenio,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas,
      };

      setCitas([...citas, nuevaCita]);

      Swal.fire({
        icon: "success",
        title: "La cita fue registrada con éxito",
        showConfirmButton: true,
      });

      setFecha("");
      setHora("");
      setNombreDuenio("");
      setNombreMascota("");
      setSintomas("");
    } else {
      Swal.fire({
        title: "Uno o más datos no válidos",
        text: "Por favor, asegúrese de ingresar datos válidos!",
        icon: "warning",
        confirmButtonColor: "#d64130",
        confirmButtonText: "Ok!",
      });
    }
  };

  const borrarCita = (cita) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar la cita?",
      text: "Una vez borrada la cita no puede volver atrás",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const citasFiltradas = citas.filter(
          (elementoCita) => elementoCita !== cita
        );
        setCitas(citasFiltradas);

        Swal.fire({
          title: "Cita eliminada con éxito",
          text: "La cita fue eliminada con éxito",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <section className="sectionForm mx-auto pt-4 px-0 rounded-3 bg-white">
        <Form className="mb-5" onSubmit={handleSubmit}>
          <h4 className="mb-4 ms-5">
            Llenar el formulario para crear una cita
          </h4>
          <div className="mb-3 containerInputs py-5 px-3 px-sm-5">
            <Form.Group className="mb-3 d-flex flex-column justify-content-start flex-lg-row justify-content-lg-between align-items-lg-center">
              <Form.Label>Nombre de Mascota:</Form.Label>
              <Form.Control
                type="text"
                placeholder="nombre de mascota"
                className="py-sm-3 input"
                minLength={3}
                maxLength={50}
                required
                onChange={(e) => setNombreMascota(e.target.value)}
                value={nombreMascota}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column justify-content-start flex-lg-row justify-content-lg-between align-items-lg-center">
              <Form.Label>Nombre de Dueño:</Form.Label>
              <Form.Control
                type="text"
                placeholder="nombre de dueño"
                className="py-sm-3 input"
                minLength={3}
                maxLength={50}
                required
                onChange={(e) => setNombreDuenio(e.target.value)}
                value={nombreDuenio}
              />
            </Form.Group>
            <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3 justify-content-lg-between mb-3">
              <Form.Group className="groupDate d-flex flex-column justify-content-start flex-lg-row gap-lg-4 justify-content-lg-between align-items-lg-center">
                <Form.Label>Fecha:</Form.Label>
                <Form.Control
                  type="date"
                  className="py-sm-3 inputDate"
                  minLength={8}
                  maxLength={8}
                  required
                  onChange={(e) => setFecha(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="d-flex flex-column gap-lg-4 justify-content-start flex-lg-row justify-content-lg-center align-items-lg-center">
                <Form.Label>Hora:</Form.Label>
                <Form.Control
                  type="time"
                  className="py-sm-3"
                  minLength={3}
                  maxLength={265}
                  required
                  onChange={(e) => setHora(e.target.value)}
                  value={hora}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3 d-flex flex-column justify-content-start flex-lg-row justify-content-lg-between align-items-lg-center">
              <Form.Label>Síntomas:</Form.Label>
              <Form.Control
                type="text"
                placeholder="describir síntomas"
                className="py-sm-3 input"
                minLength={3}
                maxLength={100}
                required
                onChange={(e) => setSintomas(e.target.value)}
                value={sintomas}
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
      <ListadoCitas citas={citas} borrarCita={borrarCita} titulo={titulo} />
    </>
  );
};

export default FormularioVeterinaria;
