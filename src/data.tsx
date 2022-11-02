// import {
//   shoes1,
//   shoes2,
//   shoes3,
//   shoes4,
//   trousers1,
//   trousers2,
//   trousers3,
//   trousers4,
//   trousers5,
//   trousers6,
// } from "./images/data";

export interface IItem {
  name: string;
  price: number;
  type: string;
  image: string;
  stars: number;
  isProductInCart: boolean;
  id: number;
  availableAmount: number;
  amountInCart: number;
}

// export interface IComponentItem extends Omit<IItem, "stars"> {
//   stars: JSX.Element[];
// }

// const items: IItem[] = [
//   {
//     name: "Nike Air Max AP",
//     price: 399,
//     type: "everything, shoes",
//     image: shoes1,
//     stars: 5,
//     isProductInCart: false,
//     id: 1,
//     availableAmount: 5,
//     amountInCart: 1,
//   },
//   {
//     name: "Nike Air Max Invigor",
//     price: 199,
//     type: "everything, shoes",
//     image: shoes2,
//     stars: 3,
//     isProductInCart: false,
//     id: 2,
//     availableAmount: 3,
//     amountInCart: 1,
//   },
//   {
//     name: "Nike Court Royale 2",
//     price: 89,
//     type: "everything, shoes",
//     image: shoes3,
//     stars: 3,
//     isProductInCart: false,
//     id: 3,
//     availableAmount: 10,
//     amountInCart: 1,
//   },
//   {
//     name: "Nike React Life",
//     price: 249,
//     type: "everything, shoes",
//     image: shoes4,
//     stars: 1,
//     isProductInCart: false,
//     id: 4,
//     availableAmount: 10,
//     amountInCart: 1,
//   },
//   {
//     name: "Jordan Sport Dri FIT",
//     price: 59,
//     type: "everything, trousers",
//     image: trousers1,
//     stars: 4,
//     isProductInCart: false,
//     id: 5,
//     availableAmount: 6,
//     amountInCart: 1,
//   },
//   {
//     name: "Jordan",
//     price: 99,
//     type: "everything, trousers",
//     image: trousers2,
//     stars: 2,
//     isProductInCart: false,
//     id: 6,
//     availableAmount: 2,
//     amountInCart: 1,
//   },
//   {
//     name: "Nike Pro",
//     price: 40,
//     type: "everything, trousers",
//     image: trousers3,
//     stars: 5,
//     isProductInCart: false,
//     id: 7,
//     availableAmount: 4,
//     amountInCart: 1,
//   },
//   {
//     name: "Nike Sportswear Club Fleece",
//     price: 120,
//     type: "everything, trousers",
//     image: trousers4,
//     stars: 1,
//     isProductInCart: false,
//     id: 8,
//     availableAmount: 14,
//     amountInCart: 1,
//   },
//   {
//     name: "Nike Sportswear",
//     price: 179,
//     type: "everything, trousers",
//     image: trousers5,
//     stars: 3,
//     isProductInCart: false,
//     id: 9,
//     availableAmount: 1,
//     amountInCart: 1,
//   },
//   {
//     name: "Paris Saint-Germain",
//     price: 109,
//     type: "everything, trousers",
//     image: trousers6,
//     stars: 4,
//     isProductInCart: false,
//     id: 10,
//     availableAmount: 2,
//     amountInCart: 1,
//   },
// ];

// export default items;
