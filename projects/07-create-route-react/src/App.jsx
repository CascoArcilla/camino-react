import Router, { appRoutes } from "./Router.jsx";
import "./App.css";
import Page404 from "./pages/Page404.jsx";

export default function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  );
}
