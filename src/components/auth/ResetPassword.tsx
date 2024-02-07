import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

import CustomButton from '../shared/Button';
import Input from '../shared/Input';

import { TAppDispatch } from '../../store/app-store';
import { ResetPasswordThunk } from '../../store/slices/auth/auth-actions';
import handlePasswordInput from './hooks/handelPasswordInput';
import { storeUISliceActions } from '../../store/slices/ui/ui-slice.ts';

const RestPassword = () => {
    const dispatch = useDispatch<TAppDispatch>();

    const passwordHandler = handlePasswordInput();
    const repeatPasswordHandler = handlePasswordInput();

    const { token } = useParams<{ token: string }>();

    const handleResetPassword = () => {
        if (passwordHandler.password === '' || repeatPasswordHandler.password === '') {
            dispatch(
                storeUISliceActions.setNotification({
                    type: 'error',
                    content: 'Please fill in all the fields',
                })
            );
            return;
        }

        if (passwordHandler.password !== repeatPasswordHandler.password) {
            dispatch(
                storeUISliceActions.setNotification({
                    type: 'error',
                    content: 'Passwords do not match',
                })
            );
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

            <div className="parent-container flex items-center justify-center m-auto h-screen bg-primary">
                <div className="child-element flex items-center flex-col bg-secondary rounded-md px-12 py-12 justify-center lg:w-[390px]  ">
                    <h1 className="text-white font-bold text-3xl sm:text-4xl self-start mt-5">
                        Reset Password
                    </h1>

                    <form
                        className="w-full flex gap-3 flex-col self-start"
                        onSubmit={handleFormSubmitting}
                    >
                        <div>
                            {/* New Password Input */}
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                            className="bg-[#3B2063] text-white "
                                value={passwordHandler.password}
                                inputLabel="Enter your new password"
                                inputError={passwordHandler.passwordError}
                                Icon={<FontAwesomeIcon icon={faUnlockKeyhole} />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    passwordHandler.handlePasswordChange(e.target.value)
                                }
                            />

                            {/* Repeat Password Input */}
                            <Input
                                type="password"
                                id="password-confirmation"
                                placeholder="Repeat Password"
                                className="bg-[#3B2063] text-white "
                                value={repeatPasswordHandler.password}
                                inputLabel="Repeat your new password"
                                inputError={repeatPasswordHandler.passwordError}
                                Icon={<FontAwesomeIcon icon={faUnlockKeyhole} />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    repeatPasswordHandler.handlePasswordChange(e.target.value)
                                }
                            />
                        </div>

                        {/* Reset Button */}
                            <CustomButton>
                                <span className="text-white">Reset</span>
                            </CustomButton>
                    </form>
                </div>
            </div>
        </>
    );
};
export default RestPassword;
