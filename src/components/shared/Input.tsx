import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id: string;
    inputContainerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    inputLabel?: string;
    inputError?: string;
    IconSrc?: string;
    IconAlt?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        id,
        type,
        className,
        inputContainerProps,
        inputLabel,
        inputError,
        IconSrc,
        IconAlt,
        ...restProps
    } = props;

    const { className: inputContainerClassName, ...inputPropsRestProps } = inputContainerProps || {};

    return (
        <div className={twMerge('w-full mt-4', inputContainerClassName)} {...inputPropsRestProps}>
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
                    ref={ref}
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
});

export default Input;
