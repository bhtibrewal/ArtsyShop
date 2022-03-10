export const ButtonSecondary = ({ children, className, onClick }) => {
    return (
      <button class={`btn btn-secondary
       ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  };