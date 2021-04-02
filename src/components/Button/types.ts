import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  ReactNode,
} from "react";
import type { ButtonStyle } from "../../types/buttonStyle";

export interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  style: ButtonStyle;
  fullWidth?: boolean;
  type: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >["type"];
}
