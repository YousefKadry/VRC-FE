import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

import CustomButton from '../shared/Button';
import Input from '../shared/Input';

import { TAppDispatch } from '../../store/app-store';
import { ResetPasswordThunk } from '../../store/slices/auth/auth-actions';
import handlePasswordInput from './hooks/handelPasswordInput';
import { storeUISliceActions } from '../../store/slices/ui/ui-slice.ts';
import handleRequriedInput from './hooks/handelRequiredInput.ts';

const RestPassword = () => {
    const dispatch = useDispatch<TAppDispatch>();
    const navigate = useNavigate();
    const passwordHandler = handlePasswordInput();
    const repeatPasswordHandler = handleRequriedInput('Repeat Password');

    const { token } = useParams<{ token: string }>();

    const handleResetPassword = () => {
        if (passwordHandler.password === '' || repeatPasswordHandler.value === '') {
            dispatch(
                storeUISliceActions.setNotification({
                    type: 'error',
                    content: 'Please fill in all the fields',
                })
            );
            navigate('/login');
            return;
        }

        if (passwordHandler.password !== repeatPasswordHandler.value) {
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
                repeatedPassword: repeatPasswordHandler.value,
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
            <div className="bg-white">
                <div className="parent-container flex items-center justify-center m-auto h-screen">
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
                                    className="text-bg text-white "
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
                                    className="text-bg text-white "
                                    value={repeatPasswordHandler.value}
                                    inputLabel="Repeat your new password"
                                    inputError={repeatPasswordHandler.error}
                                    Icon={<FontAwesomeIcon icon={faUnlockKeyhole} />}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        repeatPasswordHandler.handlevalueChange(e.target.value)
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
            </div>
        </>
    );
};
export default RestPassword;
