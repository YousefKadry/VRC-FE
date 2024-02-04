import React from 'react';
import { twJoin } from 'tailwind-merge';

interface SharingButtonProps {
    sharingURL: string;
}

const URLDisplay: React.FC<SharingButtonProps> = ({ sharingURL }) => {
    return (
        <div
            className={twJoin(
                'w-80 border border-solid border-purple-700 rounded-lg px-4 py-3',
                'bg-gradient-to-r from-gradientSimulationBox1 to-gradientSimulationBox2alt',
                'overflow-hidden'
            )}
        >
            <h5 className="overflow-hidden whitespace-nowrap text-ellipsis">{sharingURL}</h5>
        </div>
    );
};

export default URLDisplay;
