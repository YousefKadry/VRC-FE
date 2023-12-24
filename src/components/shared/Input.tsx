import React, { useState, ChangeEvent } from 'react';

interface CustomInputProps {
  placeholder: string;
  onInputChange?: (value: string) => void;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, onInputChange, className }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onInputChange) {
      onInputChange(e.target.value);
    }
  };

  return (
    <input
      type="text"
      className={`pl-14 pr-4 py-3 rounded-lg w-full bg-[#261046] ${className || ''}`}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default CustomInput;
