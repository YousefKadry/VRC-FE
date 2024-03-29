import { Dispatch } from '@reduxjs/toolkit';
import { Client, IMessage } from '@stomp/stompjs';

import AxiosUtil from '../../../utilities/axios';
import { storeRoomsSliceActions } from './rooms-slice';
import appStore from '../../app-store';
import { IRoom } from '../../../models/room';
import { storeUISliceActions } from '../ui/ui-slice';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const SERVER_WS_URL = import.meta.env.VITE_SERVER_WS_URL;

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

export const fetchSharedRoomsThunk = () => {
    return async (dispatch: Dispatch) => {
        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/rooms/get-shared-rooms`,
            method: 'GET',
        });

        if (!data) {
            return;
        }

        dispatch(
            storeRoomsSliceActions.addRooms(
                data.map((room: IRoom<string>) => ({ ...room, isSharedRoom: true }))
            )
        );
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

        dispatch(storeRoomsSliceActions.selectedRoom(data));
    };
};

export const fetchSharedRoomByIdThunk = (roomId: IRoom<string>['id']) => {
    return async (dispatch: Dispatch) => {
        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/rooms/public-room/${roomId}`,
            method: 'GET',
        });

        if (!data) {
            return;
        }

        dispatch(storeRoomsSliceActions.selectedRoom(data));
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
                isPublic: true,
                state: '',
            },
        });

        if (!data) {
            return;
        }

        dispatch(storeRoomsSliceActions.addRoom(data));
        dispatch(storeRoomsSliceActions.selectedRoom(data));
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
            selectedObjectInfo: undefined,
        };

        const data = await AxiosUtil.sendRequest(
            {
                url: `${SERVER_URL}/api/rooms/${selectedRoom.id}/update`,
                method: 'PATCH',
                data: {
                    ...selectedRoom,
                    state: JSON.stringify(stateAsJSON),
                    isUpdated: undefined,
                    ownerId: undefined,
                    collaborators: undefined,
                },
            },
            { showSpinner: false }
        );

        if (!data) {
            return;
        }

        dispatch(storeRoomsSliceActions.addRoom(data));
        dispatch(storeRoomsSliceActions.markSelectedRoomAsNotUpdated());
    };
};

export const fetchSelectedRoomCollaboratorsThunk = () => {
    return async (dispatch: Dispatch) => {
        const selectedRoomId = appStore.getState().rooms.selectedRoom?.id;

        if (!selectedRoomId) {
            return;
        }

        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/rooms/get-all-collaborators/${selectedRoomId}`,
            method: 'GET',
        });

        if (!data) {
            return;
        }

        dispatch(storeRoomsSliceActions.addCollaboratorsToSelectedRoom(data));
    };
};

export const addCollaboratorToSelectedRoomThunk = (
    collaboratorEmail: string,
    successCallback?: () => void
) => {
    return async (dispatch: Dispatch) => {
        const selectedRoomId = appStore.getState().rooms.selectedRoom?.id;

        if (!selectedRoomId) {
            return;
        }

        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/rooms/add-collaborator`,
            method: 'POST',
            data: {
                collaboratorEmail,
                id: selectedRoomId,
            },
        });

        if (!data) {
            return;
        }

        dispatch(
            storeUISliceActions.setNotification({
                type: 'info',
                content: data,
            })
        );

        dispatch(storeRoomsSliceActions.addCollaboratorsToSelectedRoom([collaboratorEmail]));

        if (successCallback) {
            successCallback();
        }
    };
};

export const deleteSelectedRoomCollaboratorThunk = (collaboratorEmail: string) => {
    return async (dispatch: Dispatch) => {
        const selectedRoomId = appStore.getState().rooms.selectedRoom?.id;

        if (!selectedRoomId) {
            return;
        }

        const data = await AxiosUtil.sendRequest({
            url: `${SERVER_URL}/api/rooms/delete-collaborator`,
            method: 'DELETE',
            data: {
                collaboratorEmail,
                id: selectedRoomId,
            },
        });

        if (!data) {
            return;
        }

        dispatch(
            storeUISliceActions.setNotification({
                type: 'info',
                content: data,
            })
        );

        dispatch(storeRoomsSliceActions.removeCollaboratorFromSelectedRoom(collaboratorEmail));
    };
};

export const roomsSubscriptionThunk = (topic: string, callback: (data: IMessage) => void) => {
    return async (dispatch: Dispatch) => {
        const userToken = appStore.getState().auth.token;

        if (!userToken) {
            return;
        }

        const wsClient = new Client({
            brokerURL: `${SERVER_WS_URL}/ws-rooms?token=${userToken}`,
            onConnect() {
                wsClient.subscribe(topic, callback);
            },
        });

        wsClient.activate();

        dispatch(storeRoomsSliceActions.subscribeToRoomTopic({ topic, wsClient }));
    };
};
