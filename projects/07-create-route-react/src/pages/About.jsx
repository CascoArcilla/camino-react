import Link from "../components/Link.jsx";

const i18n = {
  es: {
    title: "Somos",
    description: "Hola, sigo intenado seguir el tutorial sobre el router",
    link: "Ir al home",
  },
  en: {
    title: "We are",
    description:
      "Hello, i'm continue following the tutorial about the react router",
    link: "Go to home",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function About({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");

  return (
    <>
      <h1>{i18n.title}</h1>
      <img
        src="https://cdn.redcanina.es/wp-content/uploads/2014/10/disfraz-de-perro-de-morsa.jpg"
        alt="Foto mia"
        style={{
          height: "400px",
        }}
      />
      <p>{i18n.description}</p>
      <Link to="/">{i18n.link}</Link>
    </>
  );
}
