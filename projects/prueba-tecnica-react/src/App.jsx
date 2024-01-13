import { useCatImage, useCatFact } from "./hooks/useCats.js";
import "./App.css";

export function App() {
  const { fact, getFactAndUpdateState } = useCatFact();
  const { urlImageCat, isDisable, setIsDiable } = useCatImage({ fact });

  const handleButton = () => {
    setIsDiable(true);
    getFactAndUpdateState();
  };

  return (
    <main className="contain-main">
      <h1>Datos felinos</h1>
      <button
        className="butto-show"
        onClick={handleButton}
        disabled={isDisable}
      >
        {isDisable ? "Cargando..." : "New Fact"}
      </button>
      {fact && <p>{fact}</p>}
      {urlImageCat && (
        <img
          className="cat-image"
          src={urlImageCat}
          alt={`A image cat get to ${urlImageCat}`}
        />
      )}
    </main>
  );
}
