import React from 'react';

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="block w-full mt-4 bg-blue-600 py-3 px-4 rounded-xl hover:bg-blue-700 font-medium text-lg focus:outline-none bg-gradient-to-r from-[#501794] to-[#3E70A1]"
      type="button" // Change to "submit" if this is intended for form submission
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
