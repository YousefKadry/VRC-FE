import { PayloadAction } from '@reduxjs/toolkit';
import { generateUUID } from 'three/src/math/MathUtils.js';

import { IStoreRoomsSlice } from '../../../../models/app-store';
import { IRoomState, TUpdatableRoomObjectInfo } from '../../../../models/room';
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
            const storeObjects = (storeRoomsSlice.selectedRoom.state as any)[objectType];

            for (const object of objects || []) {
                const objectId = generateUUID();

                storeObjects[objectId] = {
                    id: objectId,
                    ...object,
                };
            }
        }
    },
    selectObject(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IRoomState['selectedObjectInfo']>) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        storeRoomsSlice.selectedRoom.state.selectedObjectInfo = action.payload;
    },
    updateSelectedObject(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<TUpdatableRoomObjectInfo>) {
        const selectedObjectInfo = storeRoomsSlice.selectedRoom?.state.selectedObjectInfo;

        if (!selectedObjectInfo) {
            return;
        }

        storeRoomsSlice.selectedRoom!.state[selectedObjectInfo.type][selectedObjectInfo.id] = {
            ...storeRoomsSlice.selectedRoom!.state[selectedObjectInfo.type][selectedObjectInfo.id],
            ...action.payload,
        };
    },
    deleteSelectedObject(storeRoomsSlice: IStoreRoomsSlice) {
        const selectedObjectInfo = storeRoomsSlice.selectedRoom?.state.selectedObjectInfo;

        if (!selectedObjectInfo) {
            return;
        }

        delete storeRoomsSlice.selectedRoom!.state[selectedObjectInfo.type][selectedObjectInfo.id];
        storeRoomsSlice.selectedRoom!.state.selectedObjectInfo = null;
    },
    updateMeshGeometry(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IUpdateMeshGeometryAction>) {
        const { id, geometryType } = action.payload;

        const targetMesh = storeRoomsSlice.selectedRoom?.state.meshes[id];

        if (!targetMesh) {
            return;
        }

        targetMesh.geometryType = geometryType;
    },
    updateCloudColor(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IUpdateCloudColorAction>) {
        const { id, color } = action.payload;

        const targetCloud = storeRoomsSlice.selectedRoom?.state.clouds[id];

        if (!targetCloud) {
            return;
        }

        targetCloud.color = color;
    },
    updateModelURL(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IUpdateModelURLAction>) {
        const { id, url } = action.payload;

        const targetModel = storeRoomsSlice.selectedRoom?.state.models[id];

        if (!targetModel) {
            return;
        }

        targetModel.URL = url;
    },
};

export default roomObjectsReducers;
