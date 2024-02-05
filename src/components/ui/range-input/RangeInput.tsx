import React, { useState } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

import classes from './RangeInput.module.css';

const getDefaultValue = (min?: any, max?: any) => {
    const minNum = +(min || 0);
    const maxNum = +(max || 100);
    return minNum + (maxNum - minNum) / 2;
};

const getInputPercentageVal = (val?: any, min?: any, max?: any) => {
    const minNum = +(min || 0);
    const maxNum = +(max || 100);
    const valNum = +(val || minNum + (maxNum - minNum) / 2);

    return ((valNum - minNum) / (maxNum - minNum)) * 100;
};

export interface IRangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    label?: string;
    primaryBg?: string;
    secondaryBg?: string;
}

const RangeInput: React.FC<IRangeInputProps> = (props) => {
    const {
        id,
        name,
        label,
        className,
        value,
        min,
        max,
        style,
        primaryBg,
        secondaryBg,
        onInput,
        ...restProps
    } = props;

    const [inputValue, setInputValue] = useState(value || getDefaultValue(min, max));

    const handleInputting = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as any;
        setInputValue(target.value);

        if (onInput) {
            onInput(event);
        }
    };

    return (
        <label className={twJoin('flex items-center gap-3')} htmlFor={id}>
            {label && <span className="font-bold">{label}</span>}{' '}
            <input
                id={id}
                className={twMerge(
                    'w-full h-1 appearance-none rounded',
                    classes['custom-range-input'],
                    className
                )}
                type="range"
                name={name}
                value={inputValue}
                min={min}
                max={max}
                style={
                    {
                        ...style,
                        '--input-val': `${getInputPercentageVal(inputValue, min, max)}%`,
                        '--range-input-primary-bg': primaryBg || 'black',
                        '--range-input-secondary-bg': secondaryBg || 'white',
                    } as any
                }
                onInput={handleInputting}
                {...restProps}
            />
        </label>
    );
};

export default RangeInput;
