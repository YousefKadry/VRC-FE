import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

import Input from '../shared/Input';
import CustomButton from '../shared/Button';

import handelEmailInput from './hooks/handleEmailInput';
import handlePasswordInput from './hooks/handelPasswordInput';
import handelButtonClick from './hooks/handelButtonClick';
import handleRequriedInput from './hooks/handelRequiredInput';
import { signUpThunk } from '../../store/slices/auth/auth-actions';
import { TAppDispatch } from '../../store/app-store';

import bg from '../../assets/BgSignup.png';

function Signup() {
    const firstNameHandeler = handleRequriedInput('First name');
    const secondNameHandeler = handleRequriedInput('Second name');
    const emailHandeler = handelEmailInput();
    const passwordHundeler = handlePasswordInput();

    const dispatch = useDispatch<TAppDispatch>();

    const handleSignUp = handelButtonClick(
        [firstNameHandeler, secondNameHandeler, emailHandeler, passwordHundeler],
        () => {
            dispatch(
                signUpThunk({
                    firstName: firstNameHandeler.value,
                    lastName: secondNameHandeler.value,
                    email: emailHandeler.email,
                    password: passwordHundeler.password,
                })
            );
        }
    );

    const handleFormSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSignUp();
    };

    return (
        <>
            <title>Sign Up</title>

            <div className="flex h-screen">
                <div className="flex-1 basis-2/3 lg:basis-1/3 h-screen bg-primary text-[#FFF] p-6 flex items-center">
                    <div className="w-full px-5">
                        <h1 className="font-bold text-5xl sm:text-6xl text-center my-10">SIGN UP</h1>

                        <form className="mt-6 w-full" onSubmit={handleFormSubmitting}>
                            {/* Name Input */}
                            <div className="flex flex-col sm:flex-row gap-x-4 justify-between">
                                <Input
                                    type="text"
                                    id="fname"
                                    className="pl-8 bg-secondary"
                                    placeholder="First Name"
                                    value={firstNameHandeler.value}
                                    inputError={firstNameHandeler.error}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        firstNameHandeler.handlevalueChange(e.target.value)
                                    }
                                />

                                <Input
                                    type="text"
                                    id="lname"
                                    className="pl-8 bg-secondary"
                                    placeholder="Last Name"
                                    value={secondNameHandeler.value}
                                    inputError={secondNameHandeler.error}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        secondNameHandeler.handlevalueChange(e.target.value)
                                    }
                                />
                            </div>

                            {/* Email Input */}
                            <Input
                                type="text"
                                id="email"
                                placeholder="Enter your email"
                                className=" bg-secondary"
                                value={emailHandeler.email}
                                inputError={emailHandeler.emailError}
                                Icon={<FontAwesomeIcon icon={faEnvelope} />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    emailHandeler.handleEmailChange(e.target.value)
                                }
                            />

                            {/* Password Input */}
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className=" bg-secondary"
                                value={passwordHundeler.password}
                                inputError={passwordHundeler.passwordError}
                                Icon={<FontAwesomeIcon icon={faUnlockKeyhole} />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    passwordHundeler.handlePasswordChange(e.target.value)
                                }
                            />

                            {/* Sign-up Button */}
                            <CustomButton type="submit">Sign Up</CustomButton>
                        </form>

                        {/* SignIn */}
                        <div className="flex my-4 items-center justify-between">
                            <p className="text-[#B6B6B6]">
                                Already Registered?{' '}
                                <a href="/login" className="text-tertiary">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="flex-1 hidden sm:block sm:basis-1/8 md:basis-1/2 lg:basis-2/3  w-full bg-primary"
                    style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
                />
            </div>
        </>
    );
}

export default Signup;
