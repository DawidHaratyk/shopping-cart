import Product from "components/Product/Product";
import { IFilters } from "types";
import { useStars } from "../../hooks/useStars";
import { useStock } from "hooks/useStock";
import { useFilteredProducts } from "hooks/useFilteredProducts";

export const useProductsValues = (filters: IFilters) => {
  const { products, isError, isLoading } = useStock();

  const cos = useFilteredProducts();

  console.log(cos);

  const { handleStarsList } = useStars();

  if (products) {
    const sortedProductsByCategory = products.filter((product) =>
      product.type.includes(filters.clothesType)
    );
  }

  // const sortedProducts = useMemo(() => {
  //   const isSortedByPrice = filters.price !== "default";

  //   const sortedProductByCategory = products.filter((product) =>
  //     product.type.includes(filters.clothesType)
  //   );

  //   if (isSortedByPrice) {
  //     return sortedProductByCategory.sort((currentProduct, nextProduct) => {
  //       const determinedProductPrice = (
  //         filters.price === "ascending" ? currentProduct : nextProduct
  //       ).price;
  //       const determinedSubtractedProductPrize = (
  //         filters.price === "ascending" ? nextProduct : currentProduct
  //       ).price;

  //       return determinedProductPrice - determinedSubtractedProductPrize;
  //     });
  //   } else return sortedProductByCategory;
  // }, [filters.clothesType, filters.price, products]);

  const productsList = products?.map((item, key) => {
    const starsList = handleStarsList(item);

    return <Product {...item} starsList={starsList} key={key} />;
  });

  // useEffect(() => {
  //   let sortedAndSearchedProducts: IItem[] = [];

  //   sortedProducts.filter((sortedProduct) => {
  //     searchedProducts.forEach((searchedProduct) => {
  //       if (searchedProduct.name === sortedProduct.name) {
  //         sortedAndSearchedProducts.push(sortedProduct);
  //       }
  //     });
  //   });

  //   setFilteredProducts(sortedAndSearchedProducts);
  // }, [searchedProducts, sortedProducts]);

  return { productsList, isError, isLoading };
};
