import { Draft } from '@reduxjs/toolkit';
import { Client } from '@stomp/stompjs';
import { PersistPartial } from 'redux-persist/lib/persistReducer';

import { IUserInfo } from './auth';
import { INotification } from './notification';
import { IRoom, IRoomState } from './room';
import { IRoomAssetsInfo, IRoomGLTF, IRoomHDRI } from './room-assets';

export interface IStoreRoomsSlice {
    rooms: Record<string, IRoom<string>>;
    selectedRoom: IRoom<IRoomState> | null;
    wsSubscriptions: Record<string, Draft<Client>>;
}

export interface IStoreUISlice {
    notification: INotification | null;
    isLoading: boolean;
    isCreateRoomPopupShown: boolean;
    isEnterRoomPopupShown: boolean;
}

export interface IStoreAuthSlice {
    hasAutoLoginFinished?: boolean;
    userInfo: IUserInfo | null;
    token: string | null;
}

export interface IStoreAssetsSlice {
    gltfsInfo: IRoomAssetsInfo<IRoomGLTF>;
    hdrisInfo: IRoomAssetsInfo<IRoomHDRI>;
}

export interface IAppStore {
    ui: IStoreUISlice;
    auth: IStoreAuthSlice & PersistPartial;
    rooms: IStoreRoomsSlice;
    assets: IStoreAssetsSlice;
}
