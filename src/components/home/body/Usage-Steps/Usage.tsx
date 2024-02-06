import numberOne from '../../../../assets/images/home-numbers-1.png';
import numberTwo from '../../../../assets/images/home-numbers-2.png';
import numberThree from '../../../../assets/images/home-numbers-3.png';
import numberFour from '../../../../assets/images/home-numbers-4.png';
import numberFive from '../../../../assets/images/home-numbers-5.png';

import Step from './Step';
const stepsData = [
    {
        title: 'Unlock Creativity!',
        description: 'Join us! Sign up, log in, and let the magic begin on your personalized dashboard.',
        imageUrl: numberOne,
    },
    {
        title: 'Navigate with Ease!',
        description:
            'Swipe through our slider to enter a room, build a room, or explore your rooms effortlessly.',
        imageUrl: numberTwo,
    },
    {
        title: 'Canvas Awaits You',
        description:
            'Join existing rooms with an ID or craft your unique space with room name and description.',
        imageUrl: numberThree,
    },
    {
        title: 'Craft Your Room!',
        description:
            'Select tabs to add 3D objects, HDRIs, text, and special effects. Move freely and sculpt in 3D!',
        imageUrl: numberFour,
    },
    {
        title: 'Share your Room!',
        description:
            "Generate a QR code or link to share your room. Let others explore the room you've crafted!",
        imageUrl: numberFive,
    },
];

const UsageSection = () => {
    return (
        <div>
            <section className="bg-white h-full flex flex-col items-center justify-center">
                <div className="p-[1%] px-[15%] lg:px-[35%]">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-bold text-center tracking-wider leading-tight">
                        Your Ultimate Guide on How to Use VRC
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center max-w-screen-lg">
                    {/* Mapping over the featureData array to render FeatureCard components */}
                    {stepsData.map((feature, index) => (
                        <Step
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            imageUrl={feature.imageUrl}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default UsageSection;
