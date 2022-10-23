import { useProductsInCartValues } from "./useProductsInCartValues";

const ProductsInCart = () => {
  const { allProductsInCart } = useProductsInCartValues();

  return <div className="products-in-cart">{allProductsInCart}</div>;
};

export default ProductsInCart;
