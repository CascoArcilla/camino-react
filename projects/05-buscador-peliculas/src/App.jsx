import { useCallback, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

export default function App() {
  const [sort, setSort] = useState(false);
  const { updateSearch, search, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debounceMovies = useCallback(
    debounce((search) => getMovies({ search }), 500),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debounceMovies(newSearch);
  };

  return (
    <div className="buscador">
      <header>
        <h1>Busca una Pelicula</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="busqueda"
            type="text"
            placeholder="Superman, Poltergist..."
            id="inp_peliculas"
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && (
          <p style={{ color: "#f56", wordSpacing: "5px", textAlign: "center" }}>
            {error}
          </p>
        )}
      </header>

      <main>
        {loading ? (
          <p style={{ textAlign: "center", fontSize: "18px" }}>Cargando...</p>
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    </div>
  );
}
