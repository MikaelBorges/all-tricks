import { render, screen } from "@testing-library/react";
import { Button } from "./button";

const fakeActionClick = jest.fn();

test("Default Select Text Button", () => {
  render(<Button actionOnClick={fakeActionClick}>Veuillez sélectionner</Button>);
  const selectText = screen.getByText("Veuillez sélectionner");
  expect(selectText).toBeInTheDocument();
});
