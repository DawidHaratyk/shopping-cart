import { ProductsFiltersValuesI } from "types";
import { useAllCheckboxesValues } from "./useAllCheckboxesValues";

function AllCheckboxes({
  allCheckboxes,
  setAllCheckboxes,
  setFilters,
}: ProductsFiltersValuesI) {
  const { allCheckboxesInputs } = useAllCheckboxesValues({
    allCheckboxes,
    setAllCheckboxes,
    setFilters,
  });

  return <>{allCheckboxesInputs}</>;
}

export default AllCheckboxes;
