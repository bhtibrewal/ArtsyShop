export const InputField = ({ value, onChange, label }) => {
    return (
      <div className="artsy-input">
        <input type="text" value={value} onChange={onChange} />
        <span className="input-label">{label}</span>
      </div>
    );
  };