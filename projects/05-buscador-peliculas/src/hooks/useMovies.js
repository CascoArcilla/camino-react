import { useMemo, useCallback, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const preSeach = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === preSeach.current) return;

    try {
      setLoading(true);
      setError(null);
      preSeach.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortMovies = useMemo(() => {
    // useMemo guarda un computo, usarlo solo cuando se tenga problemas de rendimiento
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortMovies, getMovies, loading };
}
