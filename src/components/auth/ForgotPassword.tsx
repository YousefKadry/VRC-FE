import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Input from '../shared/Input';
import CustomButton from '../shared/Button';

import handelEmailInput from './hooks/handleEmailInput';
import handelButtonClick from './hooks/handelButtonClick';
import { TAppDispatch } from '../../store/app-store';
import { ForgetPasswordThunk } from '../../store/slices/auth/auth-actions';

const ForgotPassword = () => {
    const emailHandeler = handelEmailInput();
    const dispatch = useDispatch<TAppDispatch>();

    const handleForgetPassword = handelButtonClick([emailHandeler], () => {
        dispatch(
            ForgetPasswordThunk({
                email: emailHandeler.email,
            })
        );
    });

    const handleFormSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleForgetPassword();
    };

    return (
        <>
            <title>Forgot Password</title>
            <div className="bg-white">
                <div className="parent-container flex items-center justify-center w-4/5 md:2/3 xl:w-1/2 m-auto h-screen">
                    <div className="child-element flex items-center flex-col bg-secondary rounded-md px-12 py-12 justify-center ">
                        <h1 className="text-white font-bold text-3xl sm:text-4xl self-start mt-5 mb-6">
                            Forgot Password?
                        </h1>

                        <form
                            className="w-full flex gap-3 flex-col self-start"
                            onSubmit={handleFormSubmitting}
                        >
                            {/* Email Input */}
                            <Input
                                type="text"
                                id="email"
                                placeholder="yourname@gmail.com"
                                className=" text-bg"
                                value={emailHandeler.email}
                                inputLabel="Enter your email address"
                                inputError={emailHandeler.emailError}
                                Icon={<FontAwesomeIcon icon={faEnvelope} />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    emailHandeler.handleEmailChange(e.target.value)
                                }
                            />

                            {/* Reset Password button */}
                            <CustomButton type="submit">
                                <span className="text-white">Reset Password</span>
                            </CustomButton>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
