
export const OutlineButtonSecondary = ({ children, className, onClick }) => {
  return (
    <button class={`btn outline-btn-secondary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
