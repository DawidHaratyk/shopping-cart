import CartPreviewProduct from "components/CartPreviewProduct/CartPreviewProduct";
import { useProducts } from "components/ProductsContext/ProductsContext";
import { notEmpty } from "utils/notEmpty";

export const useCartProducts = () => {
  const { products } = useProducts();

  const cartPreviewProductsWithNullElements = products.map((product, key) => {
    if (product.isProductInCart) {
      return <CartPreviewProduct {...product} index={key} key={key} />;
    }
  });

  // remove undefined and null elements in cartPreviewProducts array
  const cartProducts = cartPreviewProductsWithNullElements.filter(notEmpty);

  return cartProducts;
};
