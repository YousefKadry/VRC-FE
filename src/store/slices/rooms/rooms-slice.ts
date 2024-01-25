/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

import { IStoreRoomsSlice } from '../../../models/app-store';
import roomsReducers from './reducers/rooms-reducers';
import selectedRoomReducers from './reducers/selected-room-reducers';
import roomObjectsReducers from './reducers/room-objects-reducers';
import { Vector3 } from 'three';

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
        addClouds: (storeRoomsSlice: IStoreRoomsSlice) => {
            if (!storeRoomsSlice.selectedRoom) {
                console.log('Please select');
                return;
            }

            // Assuming clouds is an object with unique IDs for each cloud
            const newCloudId = `cloud-${Date.now()}`;
            const newCloud = {
                id: newCloudId,
                color: '#FFFFFF',
                position: new Vector3(0, 0, 0),
            };

            storeRoomsSlice.selectedRoom.state.clouds = {
                ...storeRoomsSlice.selectedRoom.state.clouds,
                [newCloudId]: newCloud,
            };
        },
    },
});

export const storeRoomsSliceActions = roomsSlice.actions;

export default roomsSlice;
