import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id: string;
    inputLabel?: string;
    inputError?: string;
    IconSrc?: string;
    IconAlt?: string;
}

const Input: React.FC<InputProps> = (props) => {
    const { id, type, className, inputLabel, inputError, IconSrc, IconAlt, ...restProps } = props;

    return (
        <div className="w-full mt-4">
            {inputLabel && (
                <label
                    className="block text-white text-[15px] ml-1 mb-0.5 truncate"
                    htmlFor={id}
                    title={inputLabel}
                >
                    {inputLabel}
                </label>
            )}

            <div className="relative w-full">
                <input
                    type={type}
                    id={id}
                    className={twMerge(
                        IconSrc ? 'pl-14' : '',
                        'pr-4 py-3 rounded-lg w-full text-white outline-none',
                        className
                    )}
                    {...restProps}
                />

                {IconSrc && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img src={IconSrc} alt={IconAlt} />
                    </div>
                )}
            </div>

            {inputError && (
                <p className="text-red-500 mt-0.5 ml-2 truncate" title={inputError}>
                    {inputError}
                </p>
            )}
        </div>
    );
};

export default Input;
