import { PayloadAction } from '@reduxjs/toolkit';

import { IStoreRoomsSlice } from '../../../../models/app-store';
import { IRoom, TUpdatableRoomInfo, TUpdatableRoomStateInfo } from '../../../../models/room';

const selectedRoomReducers = {
    updateSelectedRoomInfo(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<TUpdatableRoomInfo>) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        storeRoomsSlice.selectedRoom = {
            ...storeRoomsSlice.selectedRoom,
            ...action.payload,
        };

        storeRoomsSlice.selectedRoom.isUpdated = true;
    },
    updateSelectRoom(
        storeRoomsSlice: IStoreRoomsSlice,
        action: PayloadAction<Omit<IRoom<string>, 'isUpdated' | 'ownerId' | 'collaborators'>>
    ) {
        if (!storeRoomsSlice.selectedRoom || storeRoomsSlice.selectedRoom.id !== action.payload.id) {
            return;
        }

        let stateAsJSON;

        try {
            stateAsJSON = JSON.parse(action.payload.state || '{}');
        } catch (_) {
            stateAsJSON = {};
        }

        storeRoomsSlice.selectedRoom = {
            ...storeRoomsSlice.selectedRoom,
            ...action.payload,
            state: {
                ...storeRoomsSlice.selectedRoom.state,
                ...stateAsJSON,
            },
            isUpdated: false,
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

        storeRoomsSlice.selectedRoom.isUpdated = true;
    },
    addCollaboratorsToSelectedRoom(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<string[]>) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        const emails = action.payload;

        for (const email of emails) {
            const lowercaseEmail = email.toLocaleLowerCase();

            if (storeRoomsSlice.selectedRoom.collaborators[lowercaseEmail]) {
                continue;
            }

            storeRoomsSlice.selectedRoom.collaborators[lowercaseEmail] = lowercaseEmail;
        }
    },
    removeCollaboratorFromSelectedRoom(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<string>) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        delete storeRoomsSlice.selectedRoom.collaborators[action.payload];
    },
    markSelectedRoomAsNotUpdated(storeRoomsSlice: IStoreRoomsSlice) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        storeRoomsSlice.selectedRoom.isUpdated = false;
    },
};

export default selectedRoomReducers;
