import { Dispatch } from '@reduxjs/toolkit';

import AxiosUtil from '../../../utilities/axios';
import { ILogin, ISignUp } from '../../../models/auth';
import { storeAuthSliceActions } from './auth-slice';
import appStore from '../../app-store';

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
