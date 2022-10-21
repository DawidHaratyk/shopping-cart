import { useProducts } from "components/ProductsContext/ProductsContext";

export const useRemoveProductFromCart = () => {
  const { productsInCart, setProducts, setProductsInCart, products } =
    useProducts();

  const handleRemoveProductFromCart = (key: number) => {
    const correctProductIndex = productsInCart[key].id - 1;

    const foundCorrectProductIndex = products.findIndex(
      (product) => product.id - 1 === correctProductIndex
    );

    // change button state
    products[foundCorrectProductIndex].isProductInCart =
      !products[foundCorrectProductIndex].isProductInCart;

    setProducts((oldProducts) => [...oldProducts]);

    // remove correct element from cart
    productsInCart.splice(key, 1);

    setProductsInCart((oldProductsInCart) => [...oldProductsInCart]);
  };

  return handleRemoveProductFromCart;
};
