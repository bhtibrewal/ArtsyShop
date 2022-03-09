export const ButtonPrimary = ({ children, className, onClick }) => {
  return (
    <button className={`btn btn-primary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
export const OutlineButtonPrimary = ({ children, className, onClick }) => {
  return (
    <button class={`btn outline-btn-primary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
export const OutlineButtonSecondary = ({ children, className, onClick }) => {
  return (
    <button class={`btn outline-btn-secondary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
