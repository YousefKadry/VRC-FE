import React from 'react';

const DashboardSliderImg: React.FC<{ imgSrc: string }> = ({ imgSrc }) => {
    return (
        <img className="block w-full aspect-square object-contain" src={imgSrc} alt="dashboard-enter-room" />
    );
};

export default DashboardSliderImg;
