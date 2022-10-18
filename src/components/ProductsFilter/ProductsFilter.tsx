import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { IFilters } from "components/FilterAndProducts/FilterAndProducts";
import SelectClothing from "components/SelectClothing/SelectClothing";
import CheckboxInput from "components/CheckboxInput/CheckboxInput";

interface IFiltersState {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

const ProductsFilter = ({ filters, setFilters }: IFiltersState) => {
  const [allCheckboxes, setAllCheckboxes] = useState([
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

  const handleFiltersChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    price: string,
    id: number
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

    setAllCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) => ({
        ...checkbox,
        isChecked: id === checkbox.id ? !checkbox.isChecked : false,
      }))
    );
  };

  const allCheckboxesInputs = allCheckboxes.map((checkbox, key) => (
    <CheckboxInput
      handleFiltersChange={handleFiltersChange}
      setAllCheckboxes={setAllCheckboxes}
      isChecked={checkbox.isChecked}
      priceOrder={checkbox.priceOrder}
      id={key}
    />
  ));

  const handleClearFilters = () => {
    setFilters({
      price: "default",
      clothesType: "everything",
    });

    setAllCheckboxes((prevState) =>
      prevState.map((checkbox) => ({
        ...checkbox,
        isChecked: false,
      }))
    );
  };

  useEffect(() => {
    const selectedCheckboxIndex = allCheckboxes.findIndex(
      (checkbox) => checkbox.isChecked === true
    );

    // set price filter to default when all checkboxes aren't selected
    if (selectedCheckboxIndex === -1) {
      setFilters((prevState) => ({
        ...prevState,
        price: "default",
      }));
    }
  }, [allCheckboxes, setFilters]);

  return (
    <div className="filter">
      <h4 className="filter__headline">Filter Products</h4>
      {allCheckboxesInputs}
      <SelectClothing filters={filters} setFilters={setFilters} />
      <button className="filter__btn" onClick={handleClearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default ProductsFilter;
