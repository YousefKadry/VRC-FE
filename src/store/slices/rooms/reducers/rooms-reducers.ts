import { PayloadAction } from '@reduxjs/toolkit';

import { IStoreRoomsSlice } from '../../../../models/app-store';
import { IRoom, IRoomState } from '../../../../models/room';

const initialRoomState: IRoomState = {
    clouds: false,
    stars: false,
    meshes: {},
    selectedMeshId: null,
};

const roomsReducers = {
    addRooms(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IRoom<string>[]>) {
        for (const room of action.payload) {
            storeRoomsSlice.rooms[room.id] = room;
        }
    },
    addRoom(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IRoom<string>>) {
        storeRoomsSlice.rooms[action.payload.id] = action.payload;
    },
    clearRooms(storeRoomsSlice: IStoreRoomsSlice) {
        storeRoomsSlice.rooms = {};
    },
    /**
     * @param payload the id of the target room or **null** to unset it.
     */
    setSelectedRoom(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IRoom<string>['id'] | null>) {
        if (action.payload === null) {
            storeRoomsSlice.selectedRoom = null;
            return;
        }

        const room = storeRoomsSlice.rooms[action.payload];

        if (!room) {
            return;
        }

        let stateAsJSON;

        try {
            stateAsJSON = JSON.parse(room.state || '{}');
        } catch (_) {
            stateAsJSON = {};
        }

        storeRoomsSlice.selectedRoom = {
            ...room,
            state: {
                ...initialRoomState,
                ...stateAsJSON,
            },
        };
    },
};

export default roomsReducers;
