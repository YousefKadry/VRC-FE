import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IStoreAuthSlice } from '../../../models/app-store';

const initialState: IStoreAuthSlice = {
    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
    },
    token: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthInfo: (storeAuthSlice, action: PayloadAction<IStoreAuthSlice>) => {
            storeAuthSlice.userInfo = action.payload.userInfo;
            storeAuthSlice.token = action.payload.token;
        },
    },
});

export const storeAuthSliceActions = authSlice.actions;

export default authSlice;
