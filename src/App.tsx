import { useGetProducts } from "./hooks/useGetProducts";
import { useState } from "react";
import { Select } from "./components/select/select";
import { CenteredMessage } from "./components/centeredMessage/centeredMessage";

export default function App() {
  const { products, isLoading, isError } = useGetProducts();
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("Veuillez sélectionner");

  const handleClickSelectProduct = (size: string, available: boolean) => {
    if (available) {
      setSelectedProduct(size);
      setIsSelectOpen(false);
    }
  };

  return (
    <>
      {isLoading || isError ? (
        <CenteredMessage isError={isError} text={isLoading ? "loading..." : "error, something went wrong"} />
      ) : (
        <Select
          products={products}
          onSelectProduct={(size: string, available: boolean) => handleClickSelectProduct(size, available)}
          handleClickSelect={() => setIsSelectOpen(!isSelectOpen)}
          selectedProduct={selectedProduct}
          isSelectOpen={isSelectOpen}
        />
      )}
    </>
  );
}
