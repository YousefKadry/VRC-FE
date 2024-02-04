import React from 'react';
import { ARButton, VRButton } from '@react-three/xr';

const XRButtonStyle: React.CSSProperties = {
    padding: '12px 16px',
    borderRadius: '8px',
    background: 'rgb(var(--simulation-room-sidebar-bg))',
    color: 'rgb(var(--simulation-room-sidebar-color))',
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
