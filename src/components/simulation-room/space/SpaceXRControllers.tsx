import React from 'react';
import { ARButton, VRButton } from '@react-three/xr';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IAppStore } from '../../../models/app-store';

const XRButtonStyle: React.CSSProperties = {
    padding: '12px 16px',
    borderRadius: '8px',
    background: 'rgb(var(--simulation-room-sidebar-bg))',
    color: 'rgb(var(--simulation-room-sidebar-color))',
    font: '0.8125rem sans-serif',
    outline: 'none',
    cursor: 'pointer',
};

export interface ISpaceXRControllersProps {
    isInViewMode: boolean;
    showModeButton: boolean;
}

const SpaceXRControllers: React.FC<ISpaceXRControllersProps> = (props) => {
    const { isInViewMode, showModeButton } = props;
    const roomId = useSelector((store: IAppStore) => store.rooms.selectedRoom?.id);

    const navigate = useNavigate();

    const handleModeToggling = () => {
        navigate(`/simulation-room/${roomId}${isInViewMode ? '' : '/view'}`);
    };

    return (
        <div className="flex flex-col sm:flex-row gap-3 fixed bottom-3 right-3 z-[5]">
            <VRButton style={{ ...XRButtonStyle }} />
            <ARButton style={{ ...XRButtonStyle }} />
            {showModeButton && (
                <button style={{ ...XRButtonStyle }} onClick={handleModeToggling}>
                    {isInViewMode ? 'Simulation' : 'View'} Mode
                </button>
            )}
        </div>
    );
};

export default SpaceXRControllers;
