import { createSlice } from '@reduxjs/toolkit';

import { IStoreRoomsSlice } from '../../../models/app-store';
import roomsReducers from './reducers/rooms-reducers';
import selectedRoomReducers from './reducers/selected-room-reducers';
import roomObjectsReducers from './reducers/room-objects-reducers';
import roomsWSReducers from './reducers/rooms-ws-reducers';

const initialState: IStoreRoomsSlice = {
    rooms: {},
    selectedRoom: null,
    wsSubscriptions: {},
};

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        ...roomsReducers,
        ...selectedRoomReducers,
        ...roomObjectsReducers,
        ...roomsWSReducers,
        resetRoomsInfo(storeRoomsSlice) {
            storeRoomsSlice.rooms = {};
            storeRoomsSlice.selectedRoom = null;

            for (const sub of Object.values(storeRoomsSlice.wsSubscriptions)) {
                sub.deactivate();
            }

            storeRoomsSlice.wsSubscriptions = {};
        },
    },
});

export const storeRoomsSliceActions = roomsSlice.actions;

export default roomsSlice;
