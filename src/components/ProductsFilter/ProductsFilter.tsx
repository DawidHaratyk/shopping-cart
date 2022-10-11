import React, { Dispatch, SetStateAction } from "react";
import { IFilters } from "components/FilterAndProducts/FilterAndProducts";

interface IFiltersState {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

const ProductsFilter: React.FC<IFiltersState> = ({ filters, setFilters }) => {
  const handleFiltersChange = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    price: string
  ) => {
    if (price === "ascending" || price === "descending") {
      setFilters({
        ...filters,
        price: `${
          e.currentTarget.checked && price === "ascending"
            ? "ascending"
            : "descending"
        }`,
      });
    }
  };

  return (
    <div className="filter">
      <h4 className="filter__headline">Filter Products</h4>
      <label htmlFor="price" className="filter__label">
        <input
          type="radio"
          className="filter__input"
          name="price"
          onClick={(e) => handleFiltersChange(e, "ascending")}
        />
        Ascending
      </label>
      <label htmlFor="price" className="filter__label">
        <input
          type="radio"
          className="filter__input"
          name="price"
          onClick={(e) => handleFiltersChange(e, "descending")}
        />
        Descending
      </label>
      <select name="clothing" className="filter__select">
        <option value="everything" className="filter__option">
          Everything
        </option>
        <option value="shoes" className="filter__option">
          Shoes
        </option>
        <option value="trousers" className="filter__option">
          Trousers
        </option>
      </select>
      <button className="filter__btn">Clear Filters</button>
    </div>
  );
};

export default ProductsFilter;
