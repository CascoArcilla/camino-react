import Router from "./Router.jsx";
import "./App.css";
import Page404 from "./pages/Page404.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const appRoutes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

export default function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  );
}
