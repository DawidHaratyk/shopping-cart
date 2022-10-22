import { useSearchInputValues } from "./useSearchInputValues";

const SearchInput = () => {
  const { handleSearchValueChange, searchValue } = useSearchInputValues()

  return (
    <input
      type="text"
      className="header__input"
      placeholder="Search a product..."
      value={searchValue}
      onChange={(e) => handleSearchValueChange(e)}
    />
  );
};

export default SearchInput;
