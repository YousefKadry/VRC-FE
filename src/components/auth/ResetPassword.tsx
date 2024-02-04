import React, { ChangeEvent } from 'react';
import PasswordIcon from '../../assets/Password.svg';
import CustomButton from '../shared/Button';
import Input from '../shared/Input';
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
                    <h1 className="text-white font-bold text-3xl sm:text-4xl selft-start mb-2">
                        Reset Password
                    </h1>

                    <form
                        className="w-full flex gap-3 flex-col self-start px-1"
                        onSubmit={handleFormSubmitting}
                    >
                        <div>
                            {/* New Password Input */}
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                                IconSrc={PasswordIcon}
                                IconAlt="Password Icon"
                                className="bg-[#3B2063]"
                                value={passwordHandler.password}
                                inputLabel="Enter your new password"
                                inputError={passwordHandler.passwordError}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    passwordHandler.handlePasswordChange(e.target.value)
                                }
                            />

                            {/* Repeat Password Input */}
                            <Input
                                type="password"
                                id="password-confirmation"
                                placeholder="Repeat Password"
                                IconSrc={PasswordIcon}
                                IconAlt="Repeat Password Icon"
                                className="bg-[#3B2063]"
                                value={repeatPasswordHandler.password}
                                inputLabel="Repeat your new password"
                                inputError={repeatPasswordHandler.passwordError}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    repeatPasswordHandler.handlePasswordChange(e.target.value)
                                }
                            />
                        </div>

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
