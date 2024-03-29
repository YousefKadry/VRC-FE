import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeEvent } from '@react-three/fiber';

import MeshGeometry from './MeshGeometry';

import { IAppStore } from '../../../../models/app-store';
import { IRoomObject } from '../../../../models/room';
import { TAppDispatch } from '../../../../store/app-store';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import RoomObjectUtil from '../../../../utilities/room-object';

const Meshes = () => {
    const meshes = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.meshes);
    const dispatch = useDispatch<TAppDispatch>();

    const handleObjectSelection = (e: ThreeEvent<MouseEvent>, objectId: IRoomObject['id']) => {
        e.stopPropagation();
        dispatch(storeRoomsSliceActions.selectObject({ type: 'meshes', id: objectId }));
    };

    return Object.values(meshes || {}).map((mesh) => {
        const { id, geometryType, rotation, color, ...restProps } = mesh;

        return (
            <mesh
                key={id}
                onDoubleClick={(e) => handleObjectSelection(e, id)}
                rotation={RoomObjectUtil.convertRotationFromDegreeToEuler(rotation)}
                {...restProps}
                castShadow
                receiveShadow
            >
                <MeshGeometry geometryType={geometryType} />
                <meshStandardMaterial color={color} />
            </mesh>
        );
    });
};

export default React.memo(Meshes);
