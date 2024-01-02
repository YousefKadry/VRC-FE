import React, { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

interface CustomInputProps {
  type: "text" | "password";
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  IconSrc?: string;
  IconAlt?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  handleChange,
  value,
  className,
  IconSrc,
  IconAlt,
  type,
}) => {
  return (
    <>
      <input
        type={type}
        className={`${
          IconSrc && "pl-14"
        } pr-4 py-3 rounded-lg w-full text-white ${className || ""}`}
        placeholder={placeholder}
        value={value}
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
