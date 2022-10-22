import { useProducts } from "components/ProductsContext/ProductsContext";

export const useProductValues = (isProductInCart: boolean, name: string, id: number) => {
    const { products, setProducts, productsInCart, setProductsInCart } =
    useProducts();

  const currentProductIndex = id - 1;

  const buttonClasses = isProductInCart
    ? "product__btn product__btn-red"
    : "product__btn";
  const buttonTextContent = isProductInCart
    ? "Remove from Cart"
    : "Add to Cart";

  const handleAddOrRemoveItemFromTheCart = () => {
    
    // is it the best way to change one value in array of objects?
    products[currentProductIndex].isProductInCart =
      !products[currentProductIndex].isProductInCart;
    setProducts((oldProducts) => [...oldProducts]);

    if (!isProductInCart) {
      setProductsInCart((oldProductsInCart) => [
        ...oldProductsInCart,
        products[currentProductIndex],
      ]);
    } else {
      const productInCartIndexToRemove = productsInCart.findIndex(
        (productInCart) => productInCart.name === name
      );

      productsInCart.splice(productInCartIndexToRemove, 1);

      setProductsInCart((oldProductsInCart) => [...oldProductsInCart]);
    }
  };

  return { buttonClasses, buttonTextContent, handleAddOrRemoveItemFromTheCart }
}