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
  id: number;
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
    isProductInCart: false,
    id: 1,
  },
  {
    name: "Nike Air Max Invigor",
    price: 199,
    type: "shoes",
    image: shoes2,
    stars: 3,
    numberOfProducts: 1,
    isProductInCart: false,
    id: 2,
  },
  {
    name: "Nike Court Royale 2",
    price: 89,
    type: "shoes",
    image: shoes3,
    stars: 3,
    numberOfProducts: 1,
    isProductInCart: false,
    id: 3,
  },
  {
    name: "Nike React Life",
    price: 249,
    type: "shoes",
    image: shoes4,
    stars: 1,
    numberOfProducts: 1,
    isProductInCart: false,
    id: 4,
  },
  {
    name: "Jordan Sport Dri FIT",
    price: 59,
    type: "trousers",
    image: trousers1,
    stars: 4,
    numberOfProducts: 1,
    isProductInCart: false,
    id: 5,
  },
  {
    name: "Jordan",
    price: 99,
    type: "trousers",
    image: trousers2,
    stars: 2,
    numberOfProducts: 1,
    isProductInCart: false,
    id: 6,
  },
  {
    name: "Nike Pro",
    price: 40,
    type: "trousers",
    image: trousers3,
    stars: 5,
    numberOfProducts: 1,
    isProductInCart: false,
    id: 7,
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: 120,
    type: "trousers",
    image: trousers4,
    stars: 1,
    numberOfProducts: 1,
    isProductInCart: false,
    id: 8,
  },
  {
    name: "Nike Sportswear",
    price: 179,
    type: "trousers",
    image: trousers5,
    stars: 3,
    numberOfProducts: 1,
    isProductInCart: false,
    id: 9,
  },
  {
    name: "Paris Saint-Germain",
    price: 109,
    type: "trousers",
    image: trousers6,
    stars: 4,
    numberOfProducts: 1,
    isProductInCart: false,
    id: 10,
  },
];

export default items;
