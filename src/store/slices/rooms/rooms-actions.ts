import { Dispatch } from '@reduxjs/toolkit';

import AxiosUtil from '../../../utilities/axios';
import { storeRoomsSliceActions } from './rooms-slice';
import appStore from '../../app-store';
import { IRoom } from '../../../models/room';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchRoomsThunk = () => {
    return async (dispatch: Dispatch) => {
        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/rooms/get-rooms`,
            method: 'GET',
        });

        if (!data) {
            return;
        }

        dispatch(storeRoomsSliceActions.addRooms(data));
    };
};

export const fetchRoomByIdThunk = (roomId: IRoom<string>['id']) => {
    return async (dispatch: Dispatch) => {
        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/rooms/get-room/${roomId}`,
            method: 'GET',
        });

        if (!data) {
            return;
        }

        dispatch(storeRoomsSliceActions.addRoom(data));
        dispatch(storeRoomsSliceActions.setSelectedRoom(data.id));
    };
};

export const createNewRoomThunk = (
    title: IRoom<string>['title'],
    description: IRoom<string>['description']
) => {
    return async (dispatch: Dispatch) => {
        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/rooms/create`,
            method: 'POST',
            data: {
                title,
                description,
                isPublic: false,
                state: '',
            },
        });

        if (!data) {
            return;
        }

        dispatch(storeRoomsSliceActions.addRoom(data));
        dispatch(storeRoomsSliceActions.setSelectedRoom(data.id));
    };
};

export const saveSelectedRoomThunk = () => {
    return async (dispatch: Dispatch) => {
        const selectedRoom = appStore.getState().rooms.selectedRoom;

        if (!selectedRoom) {
            return;
        }

        const stateAsJSON = {
            ...selectedRoom.state,
            selectedMeshId: undefined,
        };

        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/rooms/${selectedRoom.id}/update`,
            method: 'PATCH',
            data: {
                ...selectedRoom,
                state: JSON.stringify(stateAsJSON),
            },
        });

        if (!data) {
            return;
        }

        dispatch(storeRoomsSliceActions.addRoom(data));
    };
};
