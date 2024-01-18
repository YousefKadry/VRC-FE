import { Dispatch } from '@reduxjs/toolkit';

import AxiosUtil from '../../../utilities/axios';
import { IForgotPassword, ILogin, IResetPassword, ISignUp } from '../../../models/auth';
import { storeAuthSliceActions } from './auth-slice';
import appStore from '../../app-store';
import { storeUISliceActions } from '../ui/ui-slice';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const loginThunk = (arg: ILogin) => {
    return async (dispatch: Dispatch) => {
        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/login`,
            method: 'POST',
            data: { ...arg },
        });

        if (!data) {
            return;
        }

        dispatch(
            storeAuthSliceActions.setAuthInfo({
                userInfo: {
                    ...data,
                    token: undefined,
                },
                token: data.token,
            })
        );
    };
};

export const signUpThunk = (arg: ISignUp) => {
    return async (dispatch: Dispatch) => {
        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/sign-up`,
            method: 'POST',
            data: { ...arg },
        });

        if (!data) {
            return;
        }

        dispatch(
            storeAuthSliceActions.setAuthInfo({
                userInfo: {
                    ...data,
                    token: undefined,
                },
                token: data.token,
            })
        );
    };
};

export const autoLoginThunk = () => {
    return async (dispatch: Dispatch) => {
        const data = await AxiosUtil.sendRequest(
            {
                url: `${SERVER_URL}/api/auto-login`,
                method: 'GET',
            },
            { showError: false }
        );

        if (!data) {
            dispatch(storeAuthSliceActions.setAutoLoginFinished());
            dispatch(storeAuthSliceActions.resetAuthInfo());
            return;
        }

        dispatch(
            storeAuthSliceActions.setAuthInfo({
                userInfo: {
                    ...data,
                    token: undefined,
                },
                token: appStore.getState().auth.token,
            })
        );

        dispatch(storeAuthSliceActions.setAutoLoginFinished());
    };
};

export const ForgetPasswordThunk = (arg: IForgotPassword) => {
    return async (dispatch: Dispatch) => {
        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/forgot-password`,
            method: 'GET',
            params: { ...arg },
        });

        if (!data) {
            return;
        }
        dispatch(storeUISliceActions.setNotification({ type: 'success', content: data }));
    };
};

export const ResetPasswordThunk = (arg: IResetPassword) => {
    return async (dispatch: Dispatch) => {
        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/set-password/${arg.token}`,
            method: 'POST',
            data: { ...arg },
        });

        if (!data) {
            return;
        }

        dispatch(storeUISliceActions.setNotification({ type: 'success', content: data }));
    };
};
