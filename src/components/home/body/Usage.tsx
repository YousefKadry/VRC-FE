import { FunctionComponent } from 'react';
import numberOne from '../../../assets/images/home-numbers-1.png';
import numberTwo from '../../../assets/images/home-numbers-2.png';
import numberThree from '../../../assets/images/home-numbers-3.png';
import numberFour from '../../../assets/images/home-numbers-4.png';
import numberFive from '../../../assets/images/home-numbers-5.png';

interface FeatureCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const FeatureCard: FunctionComponent<FeatureCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-4">
            <div className="bg-homeBg border-2 border-solid border-secondary rounded-md flex flex-col h-full">
                <div className="flex items-center p-4 pb-1">
                    <img className="w-10 h-10 object-cover ml-2 mr-3 lg:mr-0" src={imageUrl} alt={title} />
                    <h4 className="text-lg font-bold text-black font-montserrat text-center ">{title}</h4>
                </div>
                <div className="p-4 pt-2">
                    <p className="text-gray-600 text-sm text-center">{description}</p>
                </div>
            </div>
        </div>
    );
};

const FeaturesSection: FunctionComponent = () => {
    return (
        <div>
            <section className="bg-white h-full flex flex-col items-center justify-center">
                <div className="p-[1%] px-[15%] lg:px-[35%]">
                    <h2 className="text-4xl text-gray-600 font-bold text-center tracking-wider leading-tight">
                        Your Ultimate Guide on How to Use VRC
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center max-w-screen-lg">
                    <FeatureCard
                        title="Unlock Creativity!"
                        description="Join us! Sign up, log in, and let the magic begin on your personalized dashboard."
                        imageUrl={numberOne}
                    />
                    <FeatureCard
                        title="Navigate with Ease!"
                        description="Swipe through our slider to enter a room, build a room, or explore your rooms effortlessly."
                        imageUrl={numberTwo}
                    />
                    <FeatureCard
                        title="Canvas Awaits You"
                        description="Join existing rooms with an ID or craft your unique space with room name and description."
                        imageUrl={numberThree}
                    />
                    <FeatureCard
                        title="Craft Your Room!"
                        description="Select tabs to add 3D objects, HDRIs, text, and special effects. Move freely and sculpt in 3D!"
                        imageUrl={numberFour}
                    />
                    <FeatureCard
                        title="Share your Room!"
                        description="Generate a QR code or link to share your room. Let others explore the room you've crafted!"
                        imageUrl={numberFive}
                    />
                </div>
            </section>
        </div>
    );
};

export default FeaturesSection;
