const EncabezadoTarjetaCita = ({nombreMascota,nombreDuenio}) => {
  return (
    <article className="d-flex gap-3 pt-4 pb-2 px-4">
      <div className="bgColorCircle rounded-circle">
      </div>
      <div>
        <p className="mb-0">Mascota: {nombreMascota}</p>
        <p className="text-secondary">Dueño: {nombreDuenio}</p>
      </div>
    </article>
  );
};

export default EncabezadoTarjetaCita;
