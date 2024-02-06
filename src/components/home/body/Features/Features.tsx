import { FunctionComponent } from 'react';
import qrSharing from '../../../../assets/icons/home-qrSharing.svg';
import roomCreation from '../../../../assets/icons/home-room.svg';
import enhancingRoom from '../../../../assets/icons/home-3d.svg';

import Feature from './Feature';

const featureData = [
    {
        imgSrc: roomCreation,
        title: 'Build Your Ideal Room',
        description:
            'Craft your room, share with ease, and enjoy auto-saving. Design, share, and save effortlessly.',
    },
    {
        imgSrc: enhancingRoom,
        title: 'Enhance with 3D Magic',
        description:
            'Elevate with 3D objects, effects, and stunning HDRIs. Transform rooms into extraordinary experiences effortlessly.',
    },
    {
        imgSrc: qrSharing,
        title: 'View Shared Rooms',
        description:
            'Connect in shared virtual rooms, explore collaborative design projects, and be inspired by a creative community.',
    },
];

const Features: FunctionComponent = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="p-[1%] px-[15%] lg:px-[35%]">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-bold text-center tracking-wider leading-tight">
                        Your Gateway to Virtual Room Creation
                    </h2>
                </div>

                <div className="py-[1%] px-[5%] xl:px-[15%] justify-between flex flex-col md:flex-row ">
                    {featureData.map((feature, index) => (
                        <Feature
                            key={index}
                            imgSrc={feature.imgSrc}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Features;
