import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DoubleSide } from 'three';

import { IAppStore } from '../../../../models/app-store';
import { IRoomObject } from '../../../../models/room';
import { TAppDispatch } from '../../../../store/app-store';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import MeshGeometry from './MeshGeometry';

const Meshes = () => {
    const meshes = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.meshes);
    const dispatch = useDispatch<TAppDispatch>();

    const handleObjectSelection = (objectId: IRoomObject['id']) => {
        dispatch(storeRoomsSliceActions.selectObject({ type: 'meshes', id: objectId }));
    };

    return Object.values(meshes || {}).map((mesh) => {
        const { id, geometryType, ...restProps } = mesh;

        return (
            <mesh key={id} onClick={() => handleObjectSelection(mesh.id)} {...restProps}>
                <MeshGeometry geometryType={geometryType} />
                <meshStandardMaterial color="hotpink" side={DoubleSide} />
            </mesh>
        );
    });
};

export default React.memo(Meshes);