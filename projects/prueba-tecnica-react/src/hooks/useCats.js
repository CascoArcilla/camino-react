import { useEffect, useState } from "react";
import { getFact } from "../services/facts";

const IMAGE_CAT = (word) =>
  `https://cataas.com/cat/says/${word}?size=50&color=red`;

export function useCatImage({ fact }) {
  const [urlImageCat, setUrlImageCat] = useState();
  const [isDisable, setIsDiable] = useState(false);

  useEffect(() => {
    if (!fact) return;

    const firstsWord = fact.split(" ", 3).join(" ");

    fetch(IMAGE_CAT(firstsWord)).then((res) => {
      const { url } = res;
      setUrlImageCat(url);
      setIsDiable(false);
    });
  }, [fact]);

  return { urlImageCat, isDisable, setIsDiable };
} //Este es un custom hook, usar "use" y retornar algo para que sea un hook, puede usar otros hooks de react

export function useCatFact() {
  const [fact, setFact] = useState();

  const getFactAndUpdateState = () => {
    getFact().then((newFact) => {
      setFact(newFact);
    });
  };

  useEffect(() => {
    getFactAndUpdateState();
  }, []);

  return { fact, getFactAndUpdateState };
}
