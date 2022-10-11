import {
  shoes1,
  shoes2,
  shoes3,
  shoes4,
  trousers1,
  trousers2,
  trousers3,
  trousers4,
  trousers5,
  trousers6,
} from "./images/data";

export interface IItem {
  name: string;
  price: number;
  type: string;
  image: string;
  stars: number;
  numberOfProducts?: number;
  isProductInCart?: boolean;
}

export interface IComponentItem extends Omit<IItem, "stars"> {
  stars: JSX.Element[];
}

const items: IItem[] = [
  {
    name: "Nike Air Max AP",
    price: 399,
    type: "shoes",
    image: shoes1,
    stars: 5,
    numberOfProducts: 1,
    isProductInCart: true,
  },
  {
    name: "Nike Air Max Invigor",
    price: 199,
    type: "shoes",
    image: shoes2,
    stars: 3,
    numberOfProducts: 1,
    isProductInCart: false,
  },
  {
    name: "Nike Court Royale 2",
    price: 89,
    type: "shoes",
    image: shoes3,
    stars: 3,
    numberOfProducts: 1,
    isProductInCart: false,
  },
  {
    name: "Nike React Life",
    price: 249,
    type: "shoes",
    image: shoes4,
    stars: 1,
    numberOfProducts: 1,
    isProductInCart: false,
  },
  {
    name: "Jordan Sport Dri FIT",
    price: 59,
    type: "trousers",
    image: trousers1,
    stars: 4,
    numberOfProducts: 1,
    isProductInCart: false,
  },
  {
    name: "Jordan",
    price: 99,
    type: "trousers",
    image: trousers2,
    stars: 2,
    numberOfProducts: 1,
    isProductInCart: false,
  },
  {
    name: "Nike Pro",
    price: 40,
    type: "trousers",
    image: trousers3,
    stars: 5,
    numberOfProducts: 1,
    isProductInCart: false,
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: 120,
    type: "trousers",
    image: trousers4,
    stars: 1,
    numberOfProducts: 1,
    isProductInCart: false,
  },
  {
    name: "Nike Sportswear",
    price: 179,
    type: "trousers",
    image: trousers5,
    stars: 3,
    numberOfProducts: 1,
    isProductInCart: false,
  },
  {
    name: "Paris Saint-Germain",
    price: 109,
    type: "trousers",
    image: trousers6,
    stars: 4,
    numberOfProducts: 1,
    isProductInCart: false,
  },
];

export default items;
