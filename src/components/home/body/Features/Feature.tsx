import React from 'react';

interface FeatureProps {
    imgSrc: string;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ imgSrc, title, description }) => {
    return (
        <div className="flex flex-col items-center border-solid border-2 border-footer rounded-lg overflow-hidden mb-[20px] w-full lg:w-1/4 bg-homeBg mx-2">
            <div className="py-2.5 px-6">
                <img alt="" src={imgSrc} className="w-[55px] h-[55px] m-auto" />
                <h2 className="mt-3 mb-2.5 text-footer font-bold text-2xl text-center">{title}</h2>
                <p className="text-gray-600 text-base text-center">{description}</p>
            </div>
        </div>
    );
};

export default Feature;
