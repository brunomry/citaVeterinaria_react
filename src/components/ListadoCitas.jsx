import TarjetaCita from "./TarjetaCita";

const ListadoCitas = () => {
  return (
    <section className="sectionQuotes bg-white mx-auto mb-5">
      <h4 className="py-3 text-center">Administra las citas aquí</h4>
      <article className="py-5 containerCardsQuotes border-top border-2 d-flex gap-3 flex-wrap justify-content-center px-2">
        <TarjetaCita />
        <TarjetaCita />
      </article>
    </section>
  );
};

export default ListadoCitas;
