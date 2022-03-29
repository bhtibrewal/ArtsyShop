
export const Dropdown = ({ value, setValue, options, heading }) => {
  return (
    <div className="dropdown-container sortBy-con">
      <button className="btn dropdown-btn">
        {value ?? heading}
        <i className="fa-solid fa-angle-down"></i>
      </button>
      <div className="dropdown">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              
              onClick={() => setValue(option)}
            >
              <b>{option}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
};
