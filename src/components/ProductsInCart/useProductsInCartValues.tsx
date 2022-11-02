// import { useProducts } from "components/ProductsContext/ProductsContext";
import { IoTrashBinSharp } from "react-icons/io5";
import { useRemoveProductFromCart } from "../../hooks/useRemoveProductFromCart";
import { useStars } from "../../hooks/useStars";

export const useProductsInCartValues = () => {
  // const { productsInCart, setProductsInCart } = useProducts();

  const handleRemoveProductFromCart = useRemoveProductFromCart();

  const { handleStarsList } = useStars();

  // const allProductsInCart = productsInCart.map((productInCart, key) => {
  //   const { name, image, price, availableAmount, amountInCart } = productInCart;

  //   const starsList = handleStarsList(productInCart);

  //   const availableAmountItems = Array.from(
  //     { length: availableAmount || 0 },
  //     (_, key) => (
  //       <option className="product__select-option" key={key}>
  //         {key + 1}
  //       </option>
  //     )
  //   );

  //   const handleChangeProductAmount = (
  //     e: React.ChangeEvent<HTMLSelectElement>
  //   ) => {
  //     productsInCart[key].amountInCart = Number(e.target.value);
  //     setProductsInCart((prevState) => [...prevState]);
  //   };

  //   return (
  //     <div className="product" key={key}>
  //       <div className="product__img-container">
  //         <div className="image-icon">
  //           <div className="image-icon__jdu"></div>
  //         </div>
  //         <img src={image} alt={name} className="product__img" />
  //       </div>
  //       <h5 className="product__name">{name}</h5>
  //       <span className="product__span">${price}</span>
  //       <div className="product__stars">{starsList}</div>
  //       <select
  //         name="amount"
  //         className="product__select"
  //         value={amountInCart}
  //         onChange={(e) => handleChangeProductAmount(e)}
  //       >
  //         {availableAmountItems}
  //       </select>
  //       <IoTrashBinSharp
  //         className="product__delete"
  //         onClick={() => handleRemoveProductFromCart(key)}
  //       />
  //     </div>
  //   );
  // });

  // return { allProductsInCart };
};
