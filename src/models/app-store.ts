import { IUserInfo } from './auth';

export interface IStoreUISlice {
    error: string;
    isLoading: boolean;
}

export interface IStoreAuthSlice {
    userInfo: IUserInfo;
    token: string;
}

export interface IAppStore {
    ui: IStoreUISlice;
    auth: IStoreAuthSlice;
}
