import { useProductValues } from "./useProductValues";

interface IProduct {
  name: string;
  price: number;
  image: string;
  isProductInCart: boolean;
  id: number;
  starsList: JSX.Element[];
}

const Product = ({
  starsList,
  name,
  price,
  image,
  isProductInCart,
  id,
}: IProduct) => {
  const { buttonClasses, buttonTextContent, handleAddOrRemoveItemFromTheCart } =
    useProductValues(isProductInCart, name, id);

  return (
    <div className="product">
      <img src={image} alt={name} className="product__img" />
      <h5 className="product__name">{name}</h5>
      <span className="product__span">${price}</span>
      {starsList}
      <button
        className={buttonClasses}
        onClick={handleAddOrRemoveItemFromTheCart}
      >
        {buttonTextContent}
      </button>
    </div>
  );
};

export default Product;
