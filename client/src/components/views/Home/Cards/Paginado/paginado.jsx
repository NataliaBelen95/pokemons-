import style from "../Paginado/paginado.module.css";

const Paginado = ({
  pokemonsPerPage,
  totalPokemons,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div>
      <nav className={style.containerLi}>
        <ul>
          <li className={style.liNextPrev}>
            <button onClick={goToPreviousPage}>Prev</button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={style.paginadoLink}
              >
                {number}
              </button>
            </li>
          ))}
          <li className={style.liNextPrev}>
            <button onClick={goToNextPage}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginado;
