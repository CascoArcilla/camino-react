import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true);

  const updateSearch = (newSearch) => {
    if (newSearch.startsWith(" ")) return;
    setSearch(newSearch);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === "";
      return;
    }

    if (search === "") {
      setError("Ingrese una pelicula");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con numeros");
      return;
    }

    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { updateSearch, search, error };
}
