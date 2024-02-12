import { Children, useEffect, useState } from "react";
import { EVENTS } from "../utils/cosnts.js";
import { match } from "path-to-regexp";
import { getCurrenPath } from "../utils/getCurrentPath.js";

export default function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
  children,
}) {
  const [currentPath, setCurrentPath] = useState(getCurrenPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrenPath());
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const routesChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name == "Route";

    if (!isRoute) return null;
    return props;
  });

  const allRoutesUse = routes.concat(routesChildren).filter(Boolean);

  const Page = allRoutesUse.find(({ path }) => {
    if (path === currentPath) return true;

    /*
    se usa el path-to-regexp para detectar rutas dinamicas
    como: /search/:query
    */
    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) return false;

    /*
    se guardan los parametros de la url que eran dinamicos
    si ruta es /search/:query
    y la url es /search/nodejs
    mathced.params.query === nodejs
    */
    routeParams = matched.params;
    return true;
  })?.Component;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
}
