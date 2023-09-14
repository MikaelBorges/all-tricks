import { ProductsType } from "../types/products/productsType";

const products = {
  nameList: "Taille",
  productList: [
    {
      id: "0",
      size: "S",
      state: "Epuisé",
      price: "5 €",
      available: false,
    },
    {
      id: "1",
      size: "M",
      state: "C'est le dernier, dépêchez vous !",
      price: "10 €",
      available: true,
    },
    {
      id: "2",
      size: "L",
      state: "En stock",
      price: "15 €",
      available: true,
    },
  ],
};

export const getProducts: Promise<ProductsType> = new Promise((resolve, reject) => setTimeout(resolve, 100, products));
