import { useState, useEffect } from "react";
import { getProducts } from "../api/products";
import { ProductsType } from "../types/products/productsType";

export function useGetProducts() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductsType>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts;
        setProducts(response);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, isError };
}
