import React from 'react';

interface MemberCardProps {
    image: string;
    name: string;
    position: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ image: background, name, position }) => {
    return (
        <div className="bg-white rounded-lg p-8 shadow-md mx-2 lg:mx-6 xl:mx-10 my-4 text-center w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]">
            <img
                src={background}
                alt="Member Image"
                className="w-22 h-22 md:w-32 md:h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg md:text-2xl font-semibold mb-2 text-primary">{name}</h3>
            <p className="text-gray-700 text-md md:text-lg mb-4">{position}</p>
        </div>
    );
};

export default MemberCard;
