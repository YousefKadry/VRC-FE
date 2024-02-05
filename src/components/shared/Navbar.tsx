import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { storeAuthSliceActions } from '../../store/slices/auth/auth-slice';
import { IAppStore } from '../../models/app-store';

import Logo from '../../assets/icons/home-logo-dark.svg';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const isAuth = !!useSelector((store: IAppStore) => store.auth.userInfo);
    const handleSignInClick = () => {
        navigate('/login');
    };
    const handleSignOutClick = () => {
        dispatch(storeAuthSliceActions.resetAuthInfo());
        navigate('/home');
    };
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="flex justify-between items-center bg-white p-2 px-3 md:px-20">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="mr-2 h-6 w-9" />
                <div className="text-sm font-bold text-black">SIEMENS VRC</div>
            </div>
            <div className="flex items-center">
                <div className="hidden md:block">
                    <nav className="md:flex">
                        <Link to="/home" className="ml-4 text-black">
                            Home
                        </Link>
                        {isAuth && (
                            <Link to="/dashboard" className="ml-4 text-black">
                                Dashboard
                            </Link>
                        )}
                        <Link to="/about" className="ml-4 text-black">
                            About Us
                        </Link>
                        <Link to="/contact" className="ml-4 text-black">
                            Contact Us
                        </Link>
                    </nav>
                </div>
                <div className="relative inline-block md:hidden">
                    <button
                        id="dropdownHoverButton"
                        className="text-black hover:bg-homeBg font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    {isDropdownOpen && (
                        <div
                            id="dropdownHover"
                            className="z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
                        >
                            <ul
                                className="py-2 text-md text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownHoverButton"
                            >
                                <li>
                                    <a
                                        href="/home"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Home
                                    </a>
                                </li>
                                {isAuth && (
                                    <li>
                                        <a
                                            href="/dashboard"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                )}
                                <li>
                                    <a
                                        href="/about"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <button
                    className="ml-4 bg-secondary rounded-md px-6 py-3 flex items-center"
                    onClick={isAuth ? handleSignOutClick : handleSignInClick}
                >
                    <div className="text-white">{isAuth ? 'Sign Out' : 'Sign In'}</div>
                    <span className="text-white ml-2">&rarr;</span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;

/*
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
*/
