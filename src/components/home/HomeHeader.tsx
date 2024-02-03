import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/home-logo-dark.svg';

const FrameHeader: FunctionComponent = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/login');
    };
    return (
        <header className="flex justify-between items-center bg-white p-2 px-3 md:px-20">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="mr-2 h-6 w-9" />
                <div className="text-12 font-bold" style={{ color: '#160430' }}>
                    SIEMENS VRC
                </div>
            </div>
            <div className="flex items-center">
                <button className="ml-4 bg-secondary rounded-md px-6 py-3 flex items-center">
                    <div className="text-white" onClick={handleSignInClick}>
                        Sign in
                    </div>
                    <span className="text-white ml-2">&rarr;</span>
                </button>
            </div>
        </header>
    );
};

export default FrameHeader;
