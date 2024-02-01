import React from 'react';
import { ARButton, VRButton } from '@react-three/xr';

const XRButtonStyle: React.CSSProperties = {
    padding: '8px 12px',
    border: '2px solid #1E083C',
    borderRadius: '4px',
    background: '#311B52',
    color: 'white',
    font: '0.8125rem sans-serif',
    outline: 'none',
    cursor: 'pointer',
};

const SpaceXRControllers = () => {
    return (
        <div className="flex gap-3 fixed bottom-3 right-3 z-[5]">
            <VRButton style={{ position: 'static', ...XRButtonStyle }} />
            <ARButton style={{ position: 'static', ...XRButtonStyle }} />
        </div>
    );
};

export default SpaceXRControllers;
