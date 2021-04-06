import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  ReactNode,
} from "react";

type ButtonVariation = "default" | "warn" | "success" | "danger";
export interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variation: ButtonVariation;
  fullWidth?: boolean;
  type: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >["type"];
}
