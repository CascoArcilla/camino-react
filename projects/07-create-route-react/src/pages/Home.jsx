import Link from "../components/Link.jsx";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Hola, estas en el home para hacer una react router desde cero</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/about">Ir a about</Link>
        <Link to="/en/about">Go to about</Link>
        <Link to="/animals">Ir a animales</Link>
      </div>
    </>
  );
}
