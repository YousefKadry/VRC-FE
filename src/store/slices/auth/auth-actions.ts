import { Dispatch } from '@reduxjs/toolkit';
import { storeAuthSliceActions } from './auth-slice';

const LOCAL_STORAGE_TOKEN_VARIABLE_NAME = import.meta.env.VITE_LOCAL_STORAGE_TOKEN_VARIABLE_NAME;

export const loginThunk = (loginResponse: any): any => {
    return (dispatch: Dispatch) => {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_VARIABLE_NAME, loginResponse.token);

        dispatch(
            storeAuthSliceActions.setAuthInfo({
                userInfo: {
                    ...loginResponse,
                    token: undefined,
                },
                token: loginResponse.token,
            })
        );
    };
};
