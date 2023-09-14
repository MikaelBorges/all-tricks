import "./select.css";
import { Button } from "../button/button";
import { ProductsType } from "../../types/products/productsType";
import { ProductType } from "../../types/products/productType";

type SelectProps = {
  products: ProductsType;
  onSelectProduct: (size: string, available: boolean) => void;
  handleClickSelect: () => void;
  selectedProduct: string;
  isSelectOpen: boolean;
};

export function Select({ products, onSelectProduct, handleClickSelect, selectedProduct, isSelectOpen }: SelectProps) {
  const { productList, nameList } = products;

  return (
    <div className="select">
      <Button actionOnClick={handleClickSelect}>{selectedProduct}</Button>
      {isSelectOpen && (
        <div className="list-container">
          <p className="name-list">{nameList} :</p>
          <ul className="products">
            {productList.map(({ size, price, state, available, id }: ProductType) => (
              <li
                className={`product ${available ? "" : "unavailable"}`}
                key={id}
                onClick={() => onSelectProduct(size, available)}
              >
                <span className="size">{size}</span>
                <span className="state">{state}</span>
                <span className="price">{price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
