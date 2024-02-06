import React from 'react';

const DashboardSliderImg: React.FC<{ imgSrc: string; imgAlt: string }> = ({ imgSrc, imgAlt }) => {
    return (
        <img
            className="block w-full aspect-square object-contain hover:opacity-70"
            src={imgSrc}
            alt={imgAlt}
        />
    );
};

export default DashboardSliderImg;
