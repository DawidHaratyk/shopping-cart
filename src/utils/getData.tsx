import { IItem } from "data";

export const getProducts = async (): Promise<IItem[]> => {
  const response = await fetch("http://localhost:8000/products");
  const products: Promise<IItem[]> = response.json();
  return products;
};

export const getFilteredProducts = async (): Promise<IItem[]> => {
  const response = await fetch("http://localhost:8000/filteredProducts");
  const filteredProducts: Promise<IItem[]> = response.json();
  return filteredProducts;
};
