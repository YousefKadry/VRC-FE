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

        storeRoomsSlice.selectedRoom.isUpdated = true;
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

        storeRoomsSlice.selectedRoom.isUpdated = true;
    },
    markSelectedRoomAsNotUpdated(storeRoomsSlice: IStoreRoomsSlice) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        storeRoomsSlice.selectedRoom.isUpdated = false;
    },
};

export default selectedRoomReducers;
