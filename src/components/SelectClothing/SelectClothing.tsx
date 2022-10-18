import { IFilters } from "components/FilterAndProducts/FilterAndProducts";
import React from "react";

interface SelectClothingI {
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

function SelectClothing({ filters, setFilters }: SelectClothingI) {
  const handleClothingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const clothingCategoryName = e.target.value.toLowerCase();

    setFilters((oldFilters) => ({
      ...oldFilters,
      clothesType: clothingCategoryName,
    }));
  };

  return (
    <select
      name="clothing"
      className="filter__select"
      onChange={(e) => handleClothingChange(e)}
      value={filters.clothesType}
    >
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
  );
}

export default SelectClothing;
