import { render, screen } from "@testing-library/react";
import { Select } from "./select";

const fakeProducts = {
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

const fakeHandle = jest.fn();

test("Select open", () => {
  render(
    <Select
      products={fakeProducts}
      onSelectProduct={fakeHandle}
      handleClickSelect={fakeHandle}
      selectedProduct="Veuillez sélectionner"
      isSelectOpen={true}
    />
  );
  const stateText = screen.getByText("En stock");
  expect(stateText).toBeInTheDocument();
});
