import { useAllCheckboxesValues } from 'hooks/useAllCheckboxesValues';
import { ProductsFiltersValuesI } from 'types';

function AllCheckboxes({ allCheckboxes, setAllCheckboxes, setFilters }: ProductsFiltersValuesI) {

  const { allCheckboxesInputs } = useAllCheckboxesValues({ allCheckboxes, setAllCheckboxes, setFilters })

  return (
      <>
        {allCheckboxesInputs}
     </>
  )
}

export default AllCheckboxes