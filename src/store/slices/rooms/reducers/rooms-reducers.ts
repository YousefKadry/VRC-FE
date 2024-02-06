import { PayloadAction } from '@reduxjs/toolkit';

import { IStoreRoomsSlice } from '../../../../models/app-store';
import { IRoom, IRoomState } from '../../../../models/room';

const initialRoomState: IRoomState = {
    meshes: {},
    clouds: {},
    models: {},
    texts: {},
    lights: {},
    background: '',
    stars: false,
    sky: true,
    basePlane: true,
    ambientLight: true,
    hideLightIcons: false,
    castShadows: true,
    selectedObjectInfo: null,
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
    selectedRoom(
        storeRoomsSlice: IStoreRoomsSlice,
        action: PayloadAction<Omit<IRoom<string>, 'isUpdated'> | null>
    ) {
        const room = action.payload;

        if (room === null) {
            storeRoomsSlice.selectedRoom = null;
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
            isUpdated: false,
            collaborators: {},
        };
    },
};

export default roomsReducers;
