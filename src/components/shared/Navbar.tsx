import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRightToBracket, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { storeAuthSliceActions } from '../../store/slices/auth/auth-slice';
import { IAppStore } from '../../models/app-store';

import Logo from '../../assets/icons/home-logo-light.svg';

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
        <header className="flex justify-between items-center bg-primary p-2 px-10 md:px-20">
            <Link to="/home">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="mr-2 h-6 w-9" />
                    <div className="text-sm font-bold text-white">SIEMENS VRC</div>
                </div>
            </Link>
            <div className="flex items-center">
                <div className="hidden md:block">
                    <nav className="md:flex">
                        {isAuth && (
                            <Link to="/dashboard" className="ml-4 text-white">
                                Dashboard
                            </Link>
                        )}
                        <Link to="/about" className="ml-4 text-white">
                            About Us
                        </Link>
                        <Link to="/contact" className="ml-4 text-white">
                            Contact Us
                        </Link>
                    </nav>
                </div>
                <div className="relative inline-block md:hidden">
                    <button
                        id="dropdownHoverButton"
                        className="text-black font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <FontAwesomeIcon icon={faBars} className="text-white" />
                    </button>

                    {isDropdownOpen && (
                        <div
                            id="dropdownHover"
                            className="z-10 absolute top-full right-0 bg-white divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
                        >
                            <ul
                                className="py-2 text-md text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownHoverButton"
                            >
                                {isAuth && (
                                    <li>
                                        <Link
                                            to="/dashboard"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link
                                        to="/about"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className="flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={isAuth ? handleSignOutClick : handleSignInClick}
                                    >
                                        {isAuth ? (
                                            <>
                                                <div className="text-red-700">Sign Out</div>
                                                <FontAwesomeIcon
                                                    icon={faPowerOff}
                                                    className="pt-1 pl-2 text-red-700"
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <div className="text-black">Sign In</div>
                                                <FontAwesomeIcon
                                                    icon={faArrowRightToBracket}
                                                    className="pt-1 pl-2"
                                                />
                                            </>
                                        )}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <button
                    className="ml-4 bg-homeBg rounded-md px-4 py-2 flex items-center font-bold hidden md:flex"
                    onClick={isAuth ? handleSignOutClick : handleSignInClick}
                >
                    {isAuth ? (
                        <>
                            <div className="text-red-800">Sign Out</div>
                            <FontAwesomeIcon icon={faPowerOff} className="pt-1 pl-2 text-red-800" />
                        </>
                    ) : (
                        <>
                            <div className="text-black">Sign In</div>
                            <FontAwesomeIcon icon={faArrowRightToBracket} className=" pl-2 text-black" />
                        </>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Navbar;
