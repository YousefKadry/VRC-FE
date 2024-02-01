import React from 'react';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';
import { twMerge } from 'tailwind-merge';

export interface ISwitchProps {
    id: string;
    checked: boolean;
    title?: string | React.ReactNode;
    disable?: boolean;
    containerClassName?: React.HTMLAttributes<HTMLLabelElement>['className'];
    titleClassName?: React.HTMLAttributes<HTMLSpanElement>['className'];
    toggleHandler: ReactSwitchProps['onChange'];
}

const Switch: React.FC<ISwitchProps> = (props) => {
    const { id, title, checked, disable, containerClassName, titleClassName, toggleHandler } = props;

    return (
        <label
            htmlFor={id}
            className={twMerge(
                'flex justify-between items-center gap-3 cursor-pointer select-none',
                containerClassName
            )}
        >
            {title && <span className={twMerge('font-medium text-lg', titleClassName)}>{title}</span>}

            <ReactSwitch
                id={id}
                checked={checked}
                onChange={toggleHandler}
                onColor="#a47cd4"
                offColor="#bbb"
                disabled={disable === true}
            />
        </label>
    );
};

export default Switch;
