import { ICheckbox, IFiltersState } from "types/index";
import SelectClothing from "components/SelectClothing/SelectClothing";
import { useProductsFiltersValues } from "hooks/useProductsFilterValues";
import AllCheckboxes from "components/AllCheckboxes/AllCheckboxes";
import { useEffect, useState } from "react";

const ProductsFilter = ({ filters, setFilters }: IFiltersState) => {
  const [allCheckboxes, setAllCheckboxes] = useState<ICheckbox[]>([
    {
      priceOrder: "ascending",
      isChecked: false,
      id: 0,
    },
    {
      priceOrder: "descending",
      isChecked: false,
      id: 1,
    },
  ]);

  const { handleClearFilters } = useProductsFiltersValues({
    setFilters,
    allCheckboxes,
    setAllCheckboxes,
  });

  return (
    <div className="filter">
      <h4 className="filter__headline">Filter Products</h4>
      <AllCheckboxes
        allCheckboxes={allCheckboxes}
        setAllCheckboxes={setAllCheckboxes}
        setFilters={setFilters}
      />
      <SelectClothing filters={filters} setFilters={setFilters} />
      <button className="filter__btn" onClick={handleClearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default ProductsFilter;
