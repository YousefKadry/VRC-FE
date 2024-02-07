import Main from './body/Header';
import Features from './body/Features/Features';
import Footer from './Footer';
import Insights from './body/Insights';
import Usage from './body/Usage-Steps/Usage';
import Review from './body/Review/Review';

const Home = () => {
    return (
        <main className="w-full h-full bg-homeBg flex flex-col overflow-y-auto">
            <Main />
            <Features />
            <Insights />
            <Usage />
            <Review />
            <Footer />
        </main>
    );
};

export default Home;
