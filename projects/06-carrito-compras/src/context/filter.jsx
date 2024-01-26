import { createContext, useState } from "react";

// 1.- crear contexto - lo que se consume
export const FiltersContext = createContext();

// 2.- Crear el provaider - envia el contexto
export function FiltersProvaider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
