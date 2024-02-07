import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IAppStore } from '../../../models/app-store';

import Image from '../../../assets/images/dashboard-build-room.png';

const Header = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/sign-up');
    };

    const isAuth = !!useSelector((store: IAppStore) => store.auth.userInfo);

    return (
        <div className="flex justify-between items-center py-[5%] px-[15%] bg-homeBg flex-col md:flex-row">
            <img
                alt=""
                src={Image}
                className="order-1 md:order-2 w-[90%] h-[90%] mb-2 shadow-md rounded-2xl md:w-[40%] md:mb-0"
                style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
            />
            <div className="order-2 md:order-1 flex-1 max-w-lg bg-homeBg">
                <div className="text-3xl text-footer font-bold tracking-wider mb-1 md:text-5xl md:mb-3 text-center md:text-left">
                    Unleash Your Imagination
                </div>
                <div className="text-sm text-gray-500 tracking-wide leading-relaxed py-2">
                    Dive into boundless creativity, design, and collaborate in real-time with our cutting-edge
                    Virtual Room Creator.
                </div>
                {!isAuth && (
                    <button
                        className="bg-footer text-white py-2 px-4 rounded-md cursor-pointer"
                        onClick={handleRegisterClick}
                    >
                        Register
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
