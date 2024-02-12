import Link from "../components/Link";
import { ANIMALS } from "../data/aniamles";

function useAnimal(name) {
  return ANIMALS.find((animal) => animal.name == name) || false;
}

export default function AnimalsSlusg({ routeParams }) {
  const animal = useAnimal(routeParams.name);

  return (
    <>
      <h1>{animal ? animal.name : "No se ha encontrado su animal :("}</h1>
      <div>
        {animal && <img src={animal.image} alt={animal.name} />}
        <div>
          <Link to="/animals">Retroceder</Link>
        </div>
      </div>
    </>
  );
}
