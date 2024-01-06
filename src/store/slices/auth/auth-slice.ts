import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { IStoreAuthSlice } from '../../../models/app-store';

const initialState: IStoreAuthSlice = {
    userInfo: null,
    token: null,
    hasAutoLoginFinished: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthInfo: (
            storeAuthSlice,
            action: PayloadAction<{ userInfo: IStoreAuthSlice['userInfo']; token: IStoreAuthSlice['token'] }>
        ) => {
            storeAuthSlice.userInfo = action.payload.userInfo;
            storeAuthSlice.token = action.payload.token;
        },
        resetAuthInfo: (storeAuthSlice) => {
            storeAuthSlice.userInfo = null;
            storeAuthSlice.token = null;
        },
        setAutoLoginFinished: (storeAuthSlice) => {
            storeAuthSlice.hasAutoLoginFinished = true;
        },
    },
});

const persistConfig: PersistConfig<IStoreAuthSlice> = {
    key: 'auth',
    storage,
    whitelist: ['token'],
    blacklist: ['userInfo'],
};

export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const storeAuthSliceActions = authSlice.actions;

export default authSlice;
