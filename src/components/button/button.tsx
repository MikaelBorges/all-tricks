import "./button.css";
import { SlArrowDown } from "react-icons/sl";

type ButtonProps = {
  children: string;
  actionOnClick: () => void;
};

export function Button({ children, actionOnClick }: ButtonProps) {
  return (
    <button className="button" onClick={actionOnClick}>
      {children}
      <SlArrowDown className="select-arrow" />
    </button>
  );
}
