import Link from "../Link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Hola, estas en el home para hacer una react router desde cero</p>
      <Link to="/about">Ir a about</Link>
    </>
  );
}
