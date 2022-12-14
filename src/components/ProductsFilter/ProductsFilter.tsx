import { ICheckbox, IFiltersState } from "types/index";
import SelectClothing from "components/SelectClothing/SelectClothing";
import AllCheckboxes from "components/AllCheckboxes/AllCheckboxes";
import { useState } from "react";
import { useProductsFiltersValues } from "./useProductsFilterValues";

const ProductsFilter = ({ filters, setFilters }: IFiltersState) => {
  // usun allCheckboxes ponieważ jest nie potrzebne, sprawdz po co to jest
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
