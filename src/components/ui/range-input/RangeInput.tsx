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

const RangeInput: React.FC<
    React.InputHTMLAttributes<HTMLInputElement> & { id: string; name: string; label?: string }
> = (props) => {
    const { id, name, label, className, value, min, max, style, onInput, ...restProps } = props;

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
                style={{ ...style, '--input-val': `${getInputPercentageVal(inputValue, min, max)}%` } as any}
                onInput={handleInputting}
                {...restProps}
            />
        </label>
    );
};

export default RangeInput;
