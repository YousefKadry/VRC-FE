import React from 'react';
import { twMerge } from 'tailwind-merge';

const CustomButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <button
            className={twMerge(
                'block w-full mt-4 bg-blue-600 py-3 px-4 rounded-xl font-medium text-lg focus:outline-none bg-gradient-to-r from-[#3E3E3E] to-[#2C2C2C]',
                'hover:opacity-90',
                className
            )}
            {...restProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
