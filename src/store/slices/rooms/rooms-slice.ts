import { createSlice } from '@reduxjs/toolkit';

import { IStoreRoomsSlice } from '../../../models/app-store';
import roomsReducers from './reducers/rooms-reducers';
import selectedRoomReducers from './reducers/selected-room-reducers';
import roomObjectsReducers from './reducers/room-objects-reducers';

const initialState: IStoreRoomsSlice = {
    rooms: {},
    selectedRoom: null,
};

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        ...roomsReducers,
        ...selectedRoomReducers,
        ...roomObjectsReducers,
    },
});

export const storeRoomsSliceActions = roomsSlice.actions;

export default roomsSlice;
