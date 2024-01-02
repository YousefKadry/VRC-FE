import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slices/ui/ui-slice';
import { IAppStore } from '../models/app-store';
import authSlice from './slices/auth/auth-slice';

const appStore = configureStore<IAppStore>({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
    },
});

export default appStore;
