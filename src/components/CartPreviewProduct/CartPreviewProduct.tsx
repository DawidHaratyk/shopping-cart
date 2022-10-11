import React, { useContext } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import ProductContext from "../ProductsContext/ProductsContext";

interface ICartPreviewProduct {
  name: string;
  price: number;
  image: string;
  index: number;
}

const CartPreviewProduct = ({
  name,
  price,
  image,
  index,
}: ICartPreviewProduct) => {
  const { products, setProducts } = useContext(ProductContext);

  const handleDeleteProduct = () => {
    products.splice(index, 1);
    setProducts((prevState) => [...prevState]);
  };

  return (
    <div className="product">
      <img src={image} alt={name} className="product__img" />
      <div className="product__name-container">
        <h5 className="product__name">{name}</h5>
        <span className="product__span">${price}</span>
      </div>
      <IoTrashBinSharp
        className="product__delete"
        onClick={handleDeleteProduct}
      />
    </div>
  );
};

export default CartPreviewProduct;
