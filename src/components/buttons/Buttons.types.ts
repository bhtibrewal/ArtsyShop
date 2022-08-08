import { MouseEventHandler } from "react";
export type ButtonProps = {
  children: string| JSX.Element;
  className?: string;
  onClick?: MouseEventHandler;
  type?: "button" | "submit" | "reset" | undefined;
};
export type OutlineButtonProps = {
  children: string | JSX.Element;
  className?: string;
  onClick?: MouseEventHandler;
};


