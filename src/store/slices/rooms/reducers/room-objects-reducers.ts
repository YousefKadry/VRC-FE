import { PayloadAction, current } from '@reduxjs/toolkit';
import { generateUUID } from 'three/src/math/MathUtils.js';
import { isEqual } from 'lodash';

import { IStoreRoomsSlice } from '../../../../models/app-store';
import { IRoomObject, IRoomState, TRoomObjectsType, TUpdatableRoomObjectInfo } from '../../../../models/room';
import {
    IAddObjectsAction,
    IUpdateCloudColorAction,
    IUpdateMeshGeometryAction,
    IUpdateModelURLAction,
} from '../../../../models/rooms-slice-actions';

const roomObjectsReducers = {
    addObjects(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IAddObjectsAction>) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        for (const [objectType, objects] of Object.entries(action.payload)) {
            const storeObjects = storeRoomsSlice.selectedRoom.state[objectType as TRoomObjectsType];

            for (const object of objects || []) {
                const objectId = generateUUID();

                storeObjects[objectId] = {
                    id: objectId,
                    ...object,
                };
            }
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
            const selectedObjectValue = !selectedObjectValueProxy
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

        delete storeRoomsSlice.selectedRoom!.state[selectedObjectInfo.type][selectedObjectInfo.id as string];
        storeRoomsSlice.selectedRoom!.state.selectedObjectInfo = null;
        storeRoomsSlice.selectedRoom!.isUpdated = true;
    },
    updateMeshGeometry(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IUpdateMeshGeometryAction>) {
        const { id, geometryType } = action.payload;

        const targetMesh = storeRoomsSlice.selectedRoom?.state.meshes[id as string];

        if (!targetMesh) {
            return;
        }

        targetMesh.geometryType = geometryType;
        storeRoomsSlice.selectedRoom!.isUpdated = true;
    },
    updateCloudColor(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IUpdateCloudColorAction>) {
        const { id, color } = action.payload;

        const targetCloud = storeRoomsSlice.selectedRoom?.state.clouds[id as string];

        if (!targetCloud) {
            return;
        }

        targetCloud.color = color;
        storeRoomsSlice.selectedRoom!.isUpdated = true;
    },
    updateModelURL(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IUpdateModelURLAction>) {
        const { id, url } = action.payload;

        const targetModel = storeRoomsSlice.selectedRoom?.state.models[id as string];

        if (!targetModel) {
            return;
        }

        targetModel.URL = url;
        storeRoomsSlice.selectedRoom!.isUpdated = true;
    },
};

export default roomObjectsReducers;
