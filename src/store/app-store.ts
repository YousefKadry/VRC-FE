import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import uiSlice from './slices/ui/ui-slice';
import { IAppStore } from '../models/app-store';
import { persistedAuthReducer } from './slices/auth/auth-slice';

const appStore = configureStore<IAppStore>({
    reducer: {
        ui: uiSlice.reducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export const persistedStore = persistStore(appStore);

export type TAppDispatch = typeof appStore.dispatch;

export default appStore;
