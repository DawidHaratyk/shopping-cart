import { useEffect } from "react";
import { ProductsFiltersValuesI } from "types";

export const useProductsFiltersValues = ({ allCheckboxes, setAllCheckboxes, setFilters }: ProductsFiltersValuesI) => {
    
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


      return { handleClearFilters }
    
}