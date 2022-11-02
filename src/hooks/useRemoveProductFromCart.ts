import { useStock } from "./useStock";

export const useRemoveProductFromCart = () => {
  // const { productsInCart, setProducts, setProductsInCart, products } =
  //   useStock();

  const { products } = useStock();

  // const handleRemoveProductFromCart = (key: number) => {
  //   const correctProductIndex = productsInCart[key].id - 1;

  //   const foundCorrectProductIndex = products.findIndex(
  //     (product) => product.id - 1 === correctProductIndex
  //   );

  // change button state
  // setProducts((prevProducts) => {
  //   const newProducts = prevProducts.map((product) => {
  //     if (product.id - 1 === foundCorrectProductIndex) {
  //       return { ...product, isProductInCart: !product.isProductInCart };
  //     }
  //     return product;
  //   });

  //   return newProducts;
  // });

  // remove correct element from cart
  // setProductsInCart((prevProductsInCart) => {
  //   return prevProductsInCart.filter((_, index) => index !== key);
  // });
  // };

  // return handleRemoveProductFromCart;
};
