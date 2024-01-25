import React, { ChangeEvent } from 'react';
import PasswordIcon from '../../assets/Password.svg';
import CustomButton from '../shared/Button';
import CustomInput from '../shared/Input';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TAppDispatch } from '../../store/app-store';
import { ResetPasswordThunk } from '../../store/slices/auth/auth-actions';

import handlePasswordInput from './hooks/handelPasswordInput';

const RestPassword = () => {
    const dispatch = useDispatch<TAppDispatch>();

    const passwordHandler = handlePasswordInput();
    const repeatPasswordHandler = handlePasswordInput();

    const { token } = useParams<{ token: string }>();

    const handleResetPassword = () => {
        if (passwordHandler.password !== repeatPasswordHandler.password) {
            alert('Passwords do not match!');
            return;
        }

        dispatch(
            ResetPasswordThunk({
                password: passwordHandler.password,
                token: token!,
                repeatedPassword: repeatPasswordHandler.password,
            })
        );
    };

    const handleFormSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleResetPassword();
    };

    return (
        <>
            <title>Reset Password</title>
            <div className="parent-container flex items-center justify-center w-screen h-screen bg-primary">
                <div className="child-element flex items-start flex-col w-[80%] sm:w-[60%] lg:w-[36%] h-[55%] bg-secondary rounded-[10px] px-12 py-8 justify-center">
                    <h1 className="text-white font-bold text-3xl sm:text-4xl selft-start mb-4">
                        Reset Password
                    </h1>

                    <form
                        className="mt-6 w-full flex gap-3 flex-col self-start px-1"
                        onSubmit={handleFormSubmitting}
                    >
                        {/* New Password Input */}
                        <div className="text-white text-[15px] font-bold px-2 mt-3">
                            Enter your new password
                        </div>
                        <div className="relative my-2 -mt-1">
                            <CustomInput
                                type="password"
                                placeholder="Password"
                                IconSrc={PasswordIcon}
                                IconAlt="Password Icon"
                                className="bg-[#3B2063]"
                                value={passwordHandler.password}
                                handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    passwordHandler.handlePasswordChange(e.target.value)
                                }
                            />
                        </div>
                        {passwordHandler.passwordError && (
                            <p className="text-red-500 -mb-4 -mt-5 ml-2">{passwordHandler.passwordError}</p>
                        )}
                        {/* Repeat Password Input */}
                        <div className="text-white text-[15px] font-bold px-2 mt-3">
                            Repeat your new password
                        </div>
                        <div className="relative my-2 -mt-1">
                            <CustomInput
                                type="password"
                                placeholder="Repeat Password"
                                IconSrc={PasswordIcon}
                                IconAlt="Repeat Password Icon"
                                className="bg-[#3B2063]"
                                value={repeatPasswordHandler.password}
                                handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    repeatPasswordHandler.handlePasswordChange(e.target.value)
                                }
                            />
                        </div>
                        {repeatPasswordHandler.passwordError && (
                            <p className="text-red-500 -mb-4 -mt-5 ml-2">
                                {repeatPasswordHandler.passwordError}
                            </p>
                        )}

                        {/* Reset Button */}
                        <div className="-mt-1">
                            <CustomButton>
                                <span className="text-white">Reset</span>
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default RestPassword;
