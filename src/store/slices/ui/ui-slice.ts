import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IStoreUISlice } from '../../../models/app-store';

const initialState: IStoreUISlice = {
    error: '',
    isLoading: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setError: (storeUiSlice, action: PayloadAction<string>) => {
            storeUiSlice.error = action.payload;
        },
        setIsLoading: (storeUiSlice, action: PayloadAction<boolean>) => {
            storeUiSlice.isLoading = action.payload;
        },
    },
});

export const storeUISliceActions = uiSlice.actions;

export default uiSlice;
