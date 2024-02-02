import { Suspense, lazy } from "react";
import Router from "./components/Router.jsx";
import "./App.css";
import Page404 from "./pages/Page404.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import Route from "./components/Route.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

export default function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Router>
      </Suspense>
    </main>
  );
}
