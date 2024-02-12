import { ANIMALS } from "../data/aniamles";
import Link from "../components/Link";

export default function Animals() {
  return (
    <>
      <h1>Animales</h1>
      <h2>Seleccione su animal</h2>
      <ul>
        {ANIMALS.map((animal) => {
          return (
            <li key={animal.name}>
              <Link to={`/animals/${animal.name}`}>{animal.name}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/">Ir al home</Link>
    </>
  );
}
