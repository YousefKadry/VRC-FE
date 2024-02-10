import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

import Input from '../shared/Input';
import CustomButton from '../shared/Button';

import handleRequriedInput from './hooks/handelRequiredInput';
import handelButtonClick from './hooks/handelButtonClick';
import { loginThunk } from '../../store/slices/auth/auth-actions';
import { TAppDispatch } from '../../store/app-store';

import bg from '../../assets/BackgroundImage.jpg';

function Login() {
    const emailHandeler = handleRequriedInput('Email');
    const passwordHandeler = handleRequriedInput('Password');

    const dispatch = useDispatch<TAppDispatch>();

    const handleLogin = handelButtonClick([emailHandeler, passwordHandeler], () => {
        dispatch(
            loginThunk({
                email: emailHandeler.value,
                password: passwordHandeler.value,
            })
        );
    });

    const handleFormSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <>
            <title>Login</title>

            <div className="flex h-screen">
                <div
                    className="flex-1 hidden sm:block sm:basis-1/8 md:basis-1/2 lg:basis-2/3  w-full bg-primary"
                    style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
                />
                <div className="flex-1 basis-1/3 h-screen bg-primary text-[#FFF] p-6 flex items-center">
                    <div className="w-full px-5">
                        <h1 className="font-bold text-5xl min-[320px]:text-6xl text-center my-10">SIGN IN</h1>

                        <form onSubmit={handleFormSubmitting} className="mt-6 w-full">
                            {/* Email Input */}
                            <Input
                                type="text"
                                id="email"
                                placeholder="Enter your email"
                                value={emailHandeler.value}
                                inputError={emailHandeler.error}
                                Icon={<FontAwesomeIcon icon={faEnvelope} />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    emailHandeler.handlevalueChange(e.target.value)
                                }
                            />

                            {/* Password Input */}
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={passwordHandeler.value}
                                inputError={passwordHandeler.error}
                                Icon={<FontAwesomeIcon icon={faUnlockKeyhole} />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    passwordHandeler.handlevalueChange(e.target.value)
                                }
                            />

                            {/* Sign-in Button */}
                            <CustomButton type="submit">Sign in</CustomButton>
                        </form>

                        {/* Recovery */}
                        <div className="flex flex-col 2xl:flex-row 2xl:items-center my-4 justify-between">
                            <p className="text-[#B6B6B6]">
                                Don't have an account?{' '}
                                <a href="/sign-up" className="text-white">
                                    Sign up
                                </a>
                            </p>
                            <p className="">
                                <a href="/forgot-password" className="text-[#B6B6B6]">
                                    Forgot Password?
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
