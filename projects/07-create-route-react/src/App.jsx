import Router from "./components/Router.jsx";
import "./App.css";
import Page404 from "./pages/Page404.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import Route from "./components/Route.jsx";

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

export default function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Router>
    </main>
  );
}
