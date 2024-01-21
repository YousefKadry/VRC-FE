import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import uiSlice from './slices/ui/ui-slice';
import roomsSlice from './slices/rooms/rooms-slice';
import { IAppStore } from '../models/app-store';
import { persistedAuthReducer } from './slices/auth/auth-slice';
import assetsSlice from './slices/assets/assets-slice';

const appStore = configureStore<IAppStore>({
    reducer: {
        ui: uiSlice.reducer,
        auth: persistedAuthReducer,
        rooms: roomsSlice.reducer,
        assets: assetsSlice.reducer,
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
