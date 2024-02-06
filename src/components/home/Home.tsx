import { FunctionComponent } from 'react';
import FrameHeader from '../shared/Navbar';
import Main from './body/Main';
import Features from './body/Features';
import Footer from './Footer';
import Insights from './body/Insights';
import Usage from './body/Usage';
import Review from './body/Review';
const Thumbnail: FunctionComponent = () => {
    return (
        <main className="w-full h-full bg-homeBg flex flex-col overflow-y-auto">
            <FrameHeader />
            <Main />
            <Features />
            <Insights />
            <Usage />
            <Review />
            <Footer />
        </main>
    );
};

export default Thumbnail;
