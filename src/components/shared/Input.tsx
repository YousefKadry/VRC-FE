import React, { useState, ChangeEvent } from "react";

interface CustomInputProps {
  type: "text" | "password";
  placeholder: string;
  onInputChange?: (value: string) => void;
  className?: string;
  IconSrc?: string;
  IconAlt?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  onInputChange,
  className,
  IconSrc,
  IconAlt,
  type,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onInputChange) {
      onInputChange(e.target.value);
    }
  };

  return (
    <>
      <input
        type={type}
        className={`pl-14 pr-4 py-3 rounded-lg w-full ${className || ""}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      {IconSrc && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src={IconSrc} alt={IconAlt} />
        </div>
      )}
    </>
  );
};

export default CustomInput;
