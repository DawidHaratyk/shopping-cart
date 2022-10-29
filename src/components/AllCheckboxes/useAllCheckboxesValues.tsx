import CheckboxInput from "components/CheckboxInput/CheckboxInput";
import { ProductsFiltersValuesI } from "types";

export const useAllCheckboxesValues = ({
  allCheckboxes,
  setAllCheckboxes,
  setFilters,
}: ProductsFiltersValuesI) => {
  const handleFiltersChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    price: string,
    id: number
  ) => {
    const isSortedByPrice = price === "ascending" || price === "descending";

    if (isSortedByPrice && e.target.checked) {
      const priceOrder = price === "ascending" ? "ascending" : "descending";

      setFilters((prevFilters) => ({
        ...prevFilters,
        price: priceOrder,
      }));
    }

    setAllCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) => {
        const setCheckboxesIsChecked =
          id === checkbox.id ? !checkbox.isChecked : false;

        return {
          ...checkbox,
          isChecked: setCheckboxesIsChecked,
        };
      })
    );
  };
  

  const allCheckboxesInputs = allCheckboxes.map((checkbox, key) => (
    <CheckboxInput
      handleFiltersChange={handleFiltersChange}
      isChecked={checkbox.isChecked}
      priceOrder={checkbox.priceOrder}
      id={key}
      key={key}
    />
  ));

  return { allCheckboxesInputs };
};
