import { OutlineButtonProps } from "./Buttons.types";

export const OutlineButtonPrimary = ({
  children,
  className,
  onClick,
}: OutlineButtonProps) => {
  return (
    <button
      className={`btn outline-btn-primary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
