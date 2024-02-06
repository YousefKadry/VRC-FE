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

            <div className="parent-container flex items-center justify-center w-4/5 md:2/3 xl:w-1/2 m-auto h-screen bg-primary">
                <div className="child-element flex items-center flex-col bg-secondary rounded-[10px] px-12 py-[50px] justify-center">
                    <h1 className="text-white font-bold text-2xl md:text-3xl self-start mb-4 text-center">
                        Forgot Password?
                    </h1>

                    <form className="w-full flex flex-col self-start px-1" onSubmit={handleFormSubmitting}>
                        {/* Email Input */}
                        <Input
                            type="text"
                            id="email"
                            placeholder="yourname@gmail.com"
                            className="bg-[#3B2063] text-white "
                            value={emailHandeler.email}
                            inputLabel="Enter your email address"
                            inputError={emailHandeler.emailError}
                            Icon={<FontAwesomeIcon icon={faEnvelope} />}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                emailHandeler.handleEmailChange(e.target.value)
                            }
                        />

                        {/* Reset Password button */}
                        <div className="mt-2">
                            <CustomButton type="submit">
                                <span className="text-white">Reset Password</span>
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
