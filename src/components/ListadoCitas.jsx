import TarjetaCita from "./cardQuote/TarjetaCita";

const ListadoCitas = ({ citas, borrarCita, titulo }) => {
  return (
    <section className="sectionQuotes bg-white mx-auto mb-5">
      <h4 className="py-3 text-center">{titulo}</h4>
      <article className="py-5 containerCardsQuotes border-top border-2 d-flex gap-3 flex-wrap justify-content-center px-2">
        {citas.map((elementoCita, posicion) => (
           <TarjetaCita
            key={posicion}
            cita={elementoCita}
            borrarCita={borrarCita}
          />
        ))
        }
      </article>
    </section>
  );
};

export default ListadoCitas;
