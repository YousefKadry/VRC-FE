import { PayloadAction } from '@reduxjs/toolkit';

import { IStoreRoomsSlice } from '../../../../models/app-store';
import { IMesh, TUpdatableMeshInfo } from '../../../../models/room';
import { generateUUID } from 'three/src/math/MathUtils.js';

const roomMeshesReducers = {
    addMesh(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<Omit<IMesh, 'id'>>) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        const meshId = generateUUID();

        storeRoomsSlice.selectedRoom.state.meshes[meshId] = {
            id: meshId,
            ...action.payload,
        };
    },
    /**
     * @param payload the id of the target mesh or **null** to unset it.
     */
    setSelectedMeshId(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<IMesh['id'] | null>) {
        if (!storeRoomsSlice.selectedRoom) {
            return;
        }

        storeRoomsSlice.selectedRoom.state.selectedMeshId = action.payload;
    },
    updateSelectedMesh(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<TUpdatableMeshInfo>) {
        const selectedMeshId = storeRoomsSlice.selectedRoom?.state.selectedMeshId;

        if (!selectedMeshId) {
            return;
        }

        storeRoomsSlice.selectedRoom!.state.meshes[selectedMeshId] = {
            ...storeRoomsSlice.selectedRoom!.state.meshes[selectedMeshId],
            ...action.payload,
        };
    },
    deleteSelectedMesh(storeRoomsSlice: IStoreRoomsSlice) {
        const selectedMeshId = storeRoomsSlice.selectedRoom?.state.selectedMeshId;

        if (!selectedMeshId) {
            return;
        }

        delete storeRoomsSlice.selectedRoom!.state.meshes[selectedMeshId];
        storeRoomsSlice.selectedRoom!.state.selectedMeshId = null;
    },
};

export default roomMeshesReducers;
