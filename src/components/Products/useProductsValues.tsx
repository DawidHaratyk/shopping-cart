import Product from "components/Product/Product";
import { useProducts } from "components/ProductsContext/ProductsContext";
import { useMemo } from "react";
import { IFilters } from "types";
import { useStars } from "../../hooks/useStars";

export const useProductsValues = (filters: IFilters) => {
  const { handleStarsList } = useStars();

  const { products, filteredProducts } = useProducts();

  const sortedProducts = useMemo(() => {
    const isSortedByPrice = filters.price !== "default";

    const sortedProductByCategory = products.filter((product) =>
      product.type.includes(filters.clothesType)
    );

    if (isSortedByPrice) {
      return sortedProductByCategory.sort((currentProduct, nextProduct) => {
        const determinedProductPrice = (
          filters.price === "ascending" ? currentProduct : nextProduct
        ).price;
        const determinedSubtractedProductPrize = (
          filters.price === "ascending" ? nextProduct : currentProduct
        ).price;

        return determinedProductPrice - determinedSubtractedProductPrize;
      });
    } else return sortedProductByCategory;
  }, [filters.clothesType, filters.price, products]);

  const productsList = filteredProducts.map((item, key) => {
    const starsList = handleStarsList(item);

    return <Product {...item} starsList={starsList} key={key} />;
  });

  return { sortedProducts, productsList };
};
