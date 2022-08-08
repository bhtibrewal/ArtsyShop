import { ChangeEventHandler } from "react";

type InputFieldProps = {
  value?: string;
  onChange: ChangeEventHandler;
  label?: string;
  placeholder?: string;
};
export const InputField = ({
  value,
  onChange,
  label,
  placeholder,
}: InputFieldProps) =>  (
    <div className="artsy-input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="input-label">{label}</span>
    </div>
  );

