import { ButtonProps } from "./Buttons.types";

export const ButtonPrimary = ({
  children,
  className,
  onClick,
  type
}: ButtonProps) => (
  <button className={`btn btn-primary ${className}`} type={type} onClick={onClick}>
    {children}
  </button>
);
