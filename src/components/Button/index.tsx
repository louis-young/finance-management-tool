import classNames from "classnames";
import { ButtonStyle } from "../../types/buttonStyle";
import type { ButtonProps } from "./types";

export const Button = ({
  children,
  onClick,
  style,
  fullWidth,
  type,
}: ButtonProps) => {
  const buttonClassNames = classNames({
    "px-5 py-3 w-24 rounded text-white transition hover:opacity-80": true,
    "w-full": fullWidth,
    "bg-blue-500": style === ButtonStyle.Default,
    "bg-green-500": style === ButtonStyle.Success,
    "bg-yellow-500": style === ButtonStyle.Warn,
    "bg-red-500": style === ButtonStyle.Danger,
  });

  return (
    <button onClick={onClick} className={buttonClassNames} type={type}>
      {children}
    </button>
  );
};
