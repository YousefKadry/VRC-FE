import { FunctionComponent } from 'react';
import qrSharing from '../../../assets/icons/home-qrSharing.svg';
import roomCreation from '../../../assets/icons/home-room.svg';
import enhancingRoom from '../../../assets/icons/home-3d.svg';
interface FeatureProps {
    imgSrc: string;
    title: string;
    description: string;
}

const Feature: FunctionComponent<FeatureProps> = ({ imgSrc, title, description }) => {
    return (
        <div className="flex flex-col items-center border-solid border-2 border-footer rounded-lg overflow-hidden mb-[20px] w-full lg:w-1/4 bg-homeBg">
            <div className="py-2.5 px-6">
                <img alt="" src={imgSrc} className="w-[55px] h-[55px] m-auto" />
                <h2 className="mt-3 mb-2.5 text-footer font-bold text-2xl text-center">{title}</h2>
                <p className="text-gray-600 text-base text-center">{description}</p>
            </div>
        </div>
    );
};

const Features: FunctionComponent = () => {
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

    return (
        <div>
            <section className="bg-white">
                <div className="p-[1%] px-[15%] lg:px-[35%]">
                    <h2 className="text-4xl text-gray-600 font-bold text-center tracking-wider leading-tight">
                        Your Gateway to Virtual Room Creation
                    </h2>
                </div>

                <div className="p-[1%] px-[15%] justify-between flex flex-wrap flex-col lg:flex-row">
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
