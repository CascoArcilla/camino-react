import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export default function Filters() {
  const { setFilters, filters } = useFilters();
  const idPriceInput = useId();
  const idCategoryInput = useId();

  const handlePrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={idPriceInput}>Precio</label>
        <input
          id={idPriceInput}
          type="range"
          min="0"
          max="1000"
          onChange={handlePrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={idCategoryInput}>Categoria</label>
        <select
          name="category"
          id={idCategoryInput}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
