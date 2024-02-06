import React from 'react';

interface UsageStepProps {
    title: string;
    description: string;
    imageUrl: string;
}

const UsageStep: React.FC<UsageStepProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-4">
            <div className="bg-homeBg border-2 border-solid border-secondary rounded-md flex flex-col h-full">
                <div className="flex items-center p-4 pb-1">
                    <img className="w-10 h-10 object-cover ml-2 mr-3 xl:mr-1" src={imageUrl} alt={title} />
                    <h4 className="text-lg font-bold text-black font-montserrat text-center ">{title}</h4>
                </div>
                <div className="p-4 pt-2">
                    <p className="text-gray-600 text-sm text-center">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default UsageStep;
