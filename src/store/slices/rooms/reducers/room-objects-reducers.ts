import { PayloadAction, current } from '@reduxjs/toolkit';
import { generateUUID } from 'three/src/math/MathUtils.js';
import { cloneDeep, isEqual } from 'lodash';

import { IStoreRoomsSlice } from '../../../../models/app-store';
import { IRoomObject, IRoomState, TUpdatableRoomObjectInfo } from '../../../../models/room';
import { IAddObjectsAction } from '../../../../models/rooms-slice-actions';

const roomObjectsReducers = {
    addObjects(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IAddObjectsAction>) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        let lastObjectId;
        let lastObjectType;

        for (const [objectType, objects] of Object.entries(action.payload)) {
            const storeObjects = storeRoomsSlice.selectedRoom.state[objectType as keyof IAddObjectsAction];

            for (const object of objects || []) {
                const objectId = generateUUID();

                storeObjects[objectId] = {
                    id: objectId,
                    position: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                    ...object,
                };

                lastObjectId = objectId;
                lastObjectType = objectType;
            }
        }

        if (lastObjectId && lastObjectType) {
            storeRoomsSlice.selectedRoom.state.selectedObjectInfo = {
                id: lastObjectId,
                type: lastObjectType as keyof IAddObjectsAction,
            };
        }

        storeRoomsSlice.selectedRoom.isUpdated = true;
    },
    selectObject(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IRoomState['selectedObjectInfo']>) {
        if (!storeRoomsSlice.selectedRoom || isEqual(storeRoomsSlice.selectedRoom, action.payload)) {
            return;
        }

        const selectedObjectInfoProxy = storeRoomsSlice.selectedRoom.state.selectedObjectInfo;
        const selectedObjectInfo = !selectedObjectInfoProxy
            ? selectedObjectInfoProxy
            : current(selectedObjectInfoProxy);

        if (isEqual(selectedObjectInfo, action.payload)) {
            return;
        }

        storeRoomsSlice.selectedRoom.state.selectedObjectInfo = action.payload;
    },
    updateSelectedObject(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<TUpdatableRoomObjectInfo>) {
        const selectedObjectInfo = storeRoomsSlice.selectedRoom?.state.selectedObjectInfo;

        if (!selectedObjectInfo) {
            return;
        }

        let isThereAnyChange = false;

        const selectedObject =
            storeRoomsSlice.selectedRoom!.state[selectedObjectInfo.type][selectedObjectInfo.id!];

        for (const [key, value] of Object.entries(action.payload)) {
            const selectedObjectValueProxy = selectedObject[key as keyof IRoomObject];
            const selectedObjectValue =
                !selectedObjectValueProxy || typeof selectedObjectValueProxy !== 'object'
                    ? selectedObjectValueProxy
                    : current(selectedObjectValueProxy);

            isThereAnyChange ||= !isEqual(selectedObjectValue, value);
        }

        storeRoomsSlice.selectedRoom!.state[selectedObjectInfo.type][selectedObjectInfo.id!] = {
            ...storeRoomsSlice.selectedRoom!.state[selectedObjectInfo.type][selectedObjectInfo.id as string],
            ...action.payload,
        };

        storeRoomsSlice.selectedRoom!.isUpdated ||= isThereAnyChange;
    },
    deleteSelectedObject(storeRoomsSlice: IStoreRoomsSlice) {
        const selectedObjectInfo = storeRoomsSlice.selectedRoom?.state.selectedObjectInfo;

        if (!selectedObjectInfo) {
            return;
        }

        delete storeRoomsSlice.selectedRoom!.state[selectedObjectInfo.type][selectedObjectInfo.id];
        storeRoomsSlice.selectedRoom!.state.selectedObjectInfo = null;
        storeRoomsSlice.selectedRoom!.isUpdated = true;
    },
    duplicateSelectedObject(storeRoomsSlice: IStoreRoomsSlice) {
        const selectedObjectInfo = storeRoomsSlice.selectedRoom?.state.selectedObjectInfo;

        if (!selectedObjectInfo) {
            return;
        }

        const selectedObject =
            storeRoomsSlice.selectedRoom!.state[selectedObjectInfo.type][selectedObjectInfo.id];

        const duplicatedObjectId = generateUUID();

        storeRoomsSlice.selectedRoom!.state[selectedObjectInfo.type][duplicatedObjectId] = {
            ...cloneDeep(selectedObject),
            id: duplicatedObjectId,
        };

        storeRoomsSlice.selectedRoom!.state.selectedObjectInfo = {
            ...selectedObjectInfo,
            id: duplicatedObjectId,
        };

        storeRoomsSlice.selectedRoom!.isUpdated = true;
    },
};

export default roomObjectsReducers;
