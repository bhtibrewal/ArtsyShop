export const ButtonSecondary = ({ children, className, onClick }) => {
  return (
    <button
      className={`btn btn-secondary
       ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
