import { FunctionComponent } from 'react';
import FrameHeader from '../shared/Navbar';
import Review from './ContactForm';
const Thumbnail: FunctionComponent = () => {
    return (
        <main className="w-full h-full bg-homeBg flex flex-col overflow-y-auto">
            <FrameHeader />
            <Review />
        </main>
    );
};

export default Thumbnail;
