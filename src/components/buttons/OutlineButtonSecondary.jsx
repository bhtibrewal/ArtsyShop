export const OutlineButtonSecondary = ({ children, className, onClick }) => {
  return (
    <button
      className={`btn outline-btn-secondary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
