import React from 'react';
import ReactDOM from 'react-dom';
import HashLoader from 'react-spinners/HashLoader';
import { LengthType } from 'react-spinners/helpers/props';

import Backdrop from '../backdrop/Backdrop';

const Spinner: React.FC<{
    loading: boolean;
    size?: LengthType;
    color?: string;
    cssOverride?: React.CSSProperties;
    speedMultiplier?: number;
}> = (props) => {
    const { ...restProps } = props;

    return (
        <>
            <Backdrop show={props.loading} />

            {props.loading &&
                ReactDOM.createPortal(
                    <div className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001]">
                        <HashLoader size="100px" color="#9d5ce9" {...restProps} />
                    </div>,
                    document.getElementById('spinner')!
                )}
        </>
    );
};

export default Spinner;
