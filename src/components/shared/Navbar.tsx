import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { storeAuthSliceActions } from '../../store/slices/auth/auth-slice';

import Logo from '../../assets/icons/home-logo-light.svg?react';
import { twJoin } from 'tailwind-merge';

const Navbar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(storeAuthSliceActions.resetAuthInfo());
    };

    return (
        <div className={'flex justify-between items-center bg-secondary py-3 px-10 md:px-20'}>
            <div className="flex gap-2 items-center">
                <Logo />

                <Link to={'/'}>
                    <h1 className={'sm:text-lg md:text-xl font-bold'}>SIEMENS VRC</h1>
                </Link>
            </div>

            <div className={'flex-col'}>
                <button
                    className={twJoin(
                        'bg-white text-primary font-medium px-4 py-1.5 rounded-xl',
                        'sm:px-5 sm:py-2 sm:rounded-2xl',
                        'hover:bg-gradient-to-r hover:text-white hover:from-gradient1 hover:to-gradient2',
                        'transition duration-100 ease-in-out'
                    )}
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
