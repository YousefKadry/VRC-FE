import { PersistPartial } from 'redux-persist/lib/persistReducer';

import { IUserInfo } from './auth';
import { INotification } from './notification';
import { IRoom, IRoomState } from './room';

export interface IStoreRoomsSlice {
    rooms: Record<string, IRoom<string>>;
    selectedRoom: IRoom<IRoomState> | null;
}

export interface IStoreUISlice {
    notification: INotification | null;
    isLoading: boolean;
}

export interface IStoreAuthSlice {
    hasAutoLoginFinished?: boolean;
    userInfo: IUserInfo | null;
    token: string | null;
}

export interface IAppStore {
    ui: IStoreUISlice;
    auth: IStoreAuthSlice & PersistPartial;
    rooms: IStoreRoomsSlice;
}
