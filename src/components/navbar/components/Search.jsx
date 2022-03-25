export const Search = ({ className }) => {
  return (
    <div className={`artsy-input icon-input search-input ${className}`}>
      <i className="fas fa-search"></i>
      <input placeholder="Search..." type="text" />
    </div>
  );
};
