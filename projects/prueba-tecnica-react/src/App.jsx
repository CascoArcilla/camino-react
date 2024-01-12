import { useEffect, useRef, useState } from "react";
import "./App.css";

const RANDOM_POST = "https://catfact.ninja/fact";
const IMAGE_CAT = (word) => `https://cataas.com/cat/says/${word}`;

export function App() {
  const [fact, setFact] = useState();
  const [urlCat, setUrlCat] = useState();
  const [isDisable, setIsDiable] = useState(false);

  const getFact = () => {
    fetch(RANDOM_POST)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        setIsDiable(true);
      });
  };

  useEffect(() => {
    getFact();
  }, []);

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ")[0];

    fetch(IMAGE_CAT(firstWord)).then((res) => {
      console.log(res);
      const { url } = res;
      setUrlCat(url);
      setIsDiable(false);
    });
  }, [fact]);

  return (
    <main className="contain-main">
      <h1>Datos aleatorios</h1>
      <button className="butto-show" onClick={getFact} disabled={isDisable}>
        {isDisable.current ? "Cargando..." : "Show other info"}
      </button>
      {fact && <p>{fact}</p>}
      {urlCat && (
        <img
          className="cat-image"
          src={urlCat}
          alt={`A image cat get to ${urlCat}`}
        />
      )}
    </main>
  );
}
