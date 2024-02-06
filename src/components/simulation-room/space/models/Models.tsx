import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeEvent } from '@react-three/fiber';

import GLTFModel from './GLTFModel';

import { IAppStore } from '../../../../models/app-store';
import { IRoomObject } from '../../../../models/room';
import { TAppDispatch } from '../../../../store/app-store';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import RoomObjectUtil from '../../../../utilities/room-object';

const Models = () => {
    const models = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.models);
    const dispatch = useDispatch<TAppDispatch>();

    const handleModelSelection = (e: ThreeEvent<MouseEvent>, modelId: IRoomObject['id']) => {
        e.stopPropagation();
        dispatch(storeRoomsSliceActions.selectObject({ type: 'models', id: modelId }));
    };

    return Object.values(models || {}).map((model) => {
        const { id, URL, rotation, ...restProps } = model;

        return (
            <group
                key={id}
                {...restProps}
                rotation={RoomObjectUtil.convertRotationFromDegreeToEuler(rotation)}
                onDoubleClick={(e) => handleModelSelection(e, id)}
            >
                <GLTFModel gltfModel={model} />
            </group>
        );
    });
};

export default React.memo(Models);
