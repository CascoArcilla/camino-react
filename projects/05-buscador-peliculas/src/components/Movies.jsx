export function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={`Poster de pelicula "${movie.title}"`} />
        </li>
      ))}
    </ul>
  );
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? (
    <ListOfMovies movies={movies} />
  ) : (
    <p style={{ textAlign: "center", fontSize: "18px" }}>
      No se han encontrado resultados
    </p>
  );
}
