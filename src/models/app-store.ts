import { PersistPartial } from 'redux-persist/lib/persistReducer';

import { IUserInfo } from './auth';
import { INotification } from './notification';

export interface IStoreUISlice {
    notification: INotification | null;
    isLoading: boolean;
}

export interface IStoreAuthSlice {
    userInfo: IUserInfo | null;
    token: string | null;
}

export interface IAppStore {
    ui: IStoreUISlice;
    auth: IStoreAuthSlice & PersistPartial;
}
