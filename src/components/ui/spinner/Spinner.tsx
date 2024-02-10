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
    if (!props.loading) {
        return null;
    }

    return (
        <>
            <Backdrop show={props.loading} />

            {ReactDOM.createPortal(
                <div className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001]">
                    <HashLoader size="100px" color="#2C2C2C" {...props} />
                </div>,
                document.getElementById('spinner')!
            )}
        </>
    );
};

export default Spinner;
