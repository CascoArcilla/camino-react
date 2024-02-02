import Link from "../components/Link.jsx";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <img
        src="https://scontent.fjal3-1.fna.fbcdn.net/v/t39.30808-6/380246429_3596964597206290_8419407556614345616_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFqq8wyflXKul5wwDQx-nJ9ZxuK8uDvTrNnG4ry4O9Os_j2Z0zDkyXAtUGMmMnRBwb0z1LlInO3U5KzdHc6j-NJ&_nc_ohc=jSwgMoDYLZQAX_mc6yu&_nc_ht=scontent.fjal3-1.fna&oh=00_AfDcYRk9rGuGDlkSUrw_5RJjdBkFGKebwb8-mG7DBxbk-g&oe=65C2175B"
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
