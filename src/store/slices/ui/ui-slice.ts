import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IStoreUISlice } from '../../../models/app-store';
import { INotification } from '../../../models/notification';

const initialState: IStoreUISlice = {
    notification: null,
    isLoading: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setNotification(storeUiSlice, actions: PayloadAction<Omit<INotification, 'id'> | null>) {
            storeUiSlice.notification = actions.payload && {
                ...actions.payload,
                id: Date.now().toString(),
            };
        },
        setIsLoading: (storeUiSlice, action: PayloadAction<boolean>) => {
            storeUiSlice.isLoading = action.payload;
        },
    },
});

export const storeUISliceActions = uiSlice.actions;

export default uiSlice;
