import Link from "../components/Link.jsx";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <img
        src="https://cdn.redcanina.es/wp-content/uploads/2014/10/disfraz-de-perro-de-morsa.jpg"
        alt="Foto mia"
        style={{
          height: "400px",
        }}
      />
      <p>Hola, sigo intenado seguir el tutorial sobre el router</p>
      <Link to="/">Ir al Home</Link>
    </>
  );
}
