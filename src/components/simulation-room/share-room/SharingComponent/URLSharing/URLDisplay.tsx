import React from 'react';
import { twJoin } from 'tailwind-merge';

interface SharingButtonProps {
    sharingURL: string;
}

const URLDisplay: React.FC<SharingButtonProps> = ({ sharingURL }) => {
    return (
        <div
            className={twJoin(
                'overflow-hidden w-80 border border-solid rounded-lg px-4 py-3',
                'bg-simulation-room-sidebar-bg text-simulation-room-sidebar-color',
                'border border-simulation-room-bg'
            )}
        >
            <h5 className="overflow-hidden whitespace-nowrap text-ellipsis">{sharingURL}</h5>
        </div>
    );
};

export default URLDisplay;
