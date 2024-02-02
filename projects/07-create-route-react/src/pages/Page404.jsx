import Link from "../components/Link";

export default function Page404() {
  return (
    <>
      <div>
        <h1>Not found page</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WUTeWU7jdd9z0gtOKRq7TLgqangLA9EUgffyitlYy3rsjFaKpXwjGfLsAJJ8wz0Gqhs&usqp=CAU"
          alt="Mario muerto"
        />
      </div>
      <Link to="/">Volver al inicio</Link>
    </>
  );
}
