import { createSlice } from '@reduxjs/toolkit';

import { IStoreRoomsSlice } from '../../../models/app-store';
import roomsReducers from './reducers/rooms-reducers';
import selectedRoomReducers from './reducers/selected-room-reducers';
import roomMeshesReducers from './reducers/room-meshes-reducers';

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
        ...roomMeshesReducers,
    },
});

export const storeRoomsSliceActions = roomsSlice.actions;

export default roomsSlice;
