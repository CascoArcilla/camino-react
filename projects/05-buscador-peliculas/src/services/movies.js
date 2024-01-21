const API_KEY = "8fcdeb19";

export async function searchMovies({ search }) {
  if (search === "") return;

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );

    const resJson = await res.json();
    const movies = resJson.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error("No se puede buscar la peliula");
  }
}
