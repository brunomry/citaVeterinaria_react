import TarjetaCita from "./cardQuote/TarjetaCita";

const ListadoCitas = ({ pacientes, borrarPaciente }) => {
  return (
    <section className="sectionQuotes bg-white mx-auto mb-5">
      <h4 className="py-3 text-center">Administra las citas aquí</h4>
      <article className="py-5 containerCardsQuotes border-top border-2 d-flex gap-3 flex-wrap justify-content-center px-2">
        {pacientes.map((elementoPaciente, posicion) => (
           <TarjetaCita
            key={posicion}
            paciente={elementoPaciente}
            borrarPaciente={borrarPaciente}
          />
        ))
        }
      </article>
    </section>
  );
};

export default ListadoCitas;
