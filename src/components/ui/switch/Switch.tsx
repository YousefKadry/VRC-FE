import React from 'react';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';
import { twMerge } from 'tailwind-merge';

import classes from './Switch.module.css';

export interface ISwitchProps {
    id: string;
    checked: boolean;
    title?: string | React.ReactNode;
    disable?: boolean;
    onSwitchBg?: string;
    offSwitchBg?: string;
    onSwitchHandleBg?: string;
    offSwitchHandleBg?: string;
    onSwitchColor?: string;
    offSwitchColor?: string;
    containerClassName?: React.HTMLAttributes<HTMLLabelElement>['className'];
    titleClassName?: React.HTMLAttributes<HTMLSpanElement>['className'];
    toggleHandler: ReactSwitchProps['onChange'];
}

const Switch: React.FC<ISwitchProps> = (props) => {
    const {
        id,
        title,
        checked,
        disable,
        onSwitchBg,
        offSwitchBg,
        onSwitchHandleBg,
        offSwitchHandleBg,
        onSwitchColor,
        offSwitchColor,
        containerClassName,
        titleClassName,
        toggleHandler,
    } = props;

    return (
        <label
            htmlFor={id}
            className={twMerge(
                'flex justify-between items-center gap-3 cursor-pointer select-none',
                containerClassName
            )}
            style={
                {
                    '--switch-bg': checked ? onSwitchBg : offSwitchBg,
                    '--switch-handle-bg': checked ? onSwitchHandleBg : offSwitchHandleBg,
                    '--switch-color': checked ? onSwitchColor : offSwitchColor,
                } as any
            }
        >
            {title && <span className={twMerge('font-medium text-lg', titleClassName)}>{title}</span>}

            <ReactSwitch
                id={id}
                className={classes['switch-btn']}
                checked={checked}
                onChange={toggleHandler}
                disabled={disable === true}
            />
        </label>
    );
};

export default Switch;
