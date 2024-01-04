import { PersistPartial } from 'redux-persist/lib/persistReducer';

import { IUserInfo } from './auth';

export interface IStoreUISlice {
    error: string;
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
