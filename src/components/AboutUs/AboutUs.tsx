import background from '../../assets/images/About-Background.png';
import image from '../../assets/images/aboutus-image.png';
import Footer from '../home/Footer';
import MemberCard from './MemberCard';
const membersData = [
    { id: 1, name: 'Fady Emad', position: 'Fullstack Developer', background: image },
    { id: 10, name: 'Islam Ashraf', position: 'Fullstack Developer', background: image },
    { id: 2, name: 'Youssef Kadry', position: 'Frontend Developer', background: image },
    { id: 3, name: 'Sarah Yasser', position: 'Frontend Developer', background: image },
    { id: 4, name: 'Ibrahim Mohamed', position: 'Frontend Developer', background: image },
    { id: 5, name: 'Farida Mokhtar', position: 'Frontend Developer', background: image },
    { id: 6, name: 'Farah Taher', position: 'Frontend Developer', background: image },
    { id: 7, name: 'Menna Naem', position: 'Frontend Developer', background: image },
    { id: 8, name: 'Rana Wahid', position: 'Backend Developer', background: image },
    { id: 9, name: 'Marwan Mostafa', position: 'Backend Developer', background: image },
    { id: 11, name: 'Emil Mourad', position: 'Backend Developer', background: image },
];

const About = () => {
    return (
        <>
            <title>About Us</title>
            <div className="w-full bg-homeBg">
                <div className="max-w-screen-2xl bg-homeBg m-auto">
                    <div className="w-full h-full items-center justify-center">
                        <div className="max-w-6xl mx-auto px-20 flex flex-col items-center bg-homeBg">
                            <div className="py-5 px-8 flex flex-col text-center mt-2 bg-homeBg text-primary">
                                <h2 className="text-4xl md:text-4xl font-bold tracking-wide mb-3 bg-homeBg">
                                    About us
                                </h2>
                                <p className="m-0 font-bold bg-homeBg text-gray-600 text-2xl md:text-xl">
                                    Where Imagination Meets Reality
                                </p>
                            </div>
                        </div>
                        <div
                            className="h-[500px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${background})`,
                            }}
                        ></div>
                        <div className="mx-auto px-[25px] md:px-20 text-gray-800 mt-7 text-xl md:text-2xl bg-homeBg">
                            <p>
                                We are on a mission to redefine the way people interact with their creative
                                visions. Our goal is to provide a user-friendly platform that empowers
                                individuals to craft personalized virtual reality rooms, offering a unique
                                fusion of innovation, artistry, and technology.
                            </p>
                        </div>

                        <div className="mx-auto px-20 flex flex-col items-center bg-homeBg">
                            <div className="py-5 px-8 flex flex-col text-center mt-2 bg-homeBg text-primary">
                                <h2 className="text-4xl md:text-4xl font-bold tracking-wide mt-4 mb-3 bg-homeBg">
                                    Meet our team
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center bg-homeBg w-full px-5 md:px-10">
                            {membersData.map((member) => (
                                <MemberCard
                                    key={member.id}
                                    name={member.name}
                                    position={member.position}
                                    image={member.background}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default About;
