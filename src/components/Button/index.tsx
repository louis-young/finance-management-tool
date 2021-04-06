import classNames from "classnames";
import type { ButtonProps } from "./types";

export const Button = ({
  children,
  onClick,
  variation,
  fullWidth,
  type,
}: ButtonProps) => {
  const buttonClassNames = classNames({
    "px-5 py-3 w-24 rounded text-white transition hover:opacity-80": true,
    "w-full": fullWidth,
    "bg-indigo-600": variation === "default",
    "bg-green-500": variation === "success",
    "bg-yellow-400": variation === "warn",
    "bg-red-500": variation === "danger",
  });

  return (
    <button onClick={onClick} className={buttonClassNames} type={type}>
      {children}
    </button>
  );
};
