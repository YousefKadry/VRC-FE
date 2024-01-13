import { PayloadAction } from '@reduxjs/toolkit';

import { IStoreRoomsSlice } from '../../../../models/app-store';
import { TUpdatableRoomInfo, TUpdatableRoomStateInfo } from '../../../../models/room';

const selectedRoomReducers = {
    
    updateSelectedRoom(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<TUpdatableRoomInfo>) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        storeRoomsSlice.selectedRoom = {
            ...storeRoomsSlice.selectedRoom,
            ...action.payload,
        };
    },
    updateSelectedRoomState(
        storeRoomsSlice: IStoreRoomsSlice,
        action: PayloadAction<TUpdatableRoomStateInfo>
    ) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        storeRoomsSlice.selectedRoom.state = {
            ...storeRoomsSlice.selectedRoom.state,
            ...action.payload,
        };
    },
    
};

export default selectedRoomReducers;
