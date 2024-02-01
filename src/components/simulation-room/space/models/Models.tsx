import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GLTFModel from './GLTFModel';

import { IAppStore } from '../../../../models/app-store';
import { IRoomObject } from '../../../../models/room';
import { TAppDispatch } from '../../../../store/app-store';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import RoomObjectUtil from '../../../../utilities/room-object';

const Models = () => {
    const models = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.models);
    const dispatch = useDispatch<TAppDispatch>();

    const handleModelSelection = (modelId: IRoomObject['id']) => {
        dispatch(storeRoomsSliceActions.selectObject({ type: 'models', id: modelId }));
    };

    return Object.values(models || {}).map((model) => {
        const { id, URL, rotation, ...restProps } = model;

        return (
            <scene
                key={id}
                {...restProps}
                rotation={RoomObjectUtil.convertRotationFromDegreeToEuler(rotation)}
                onClick={handleModelSelection.bind(null, id)}
            >
                <GLTFModel gltfURL={URL} />
            </scene>
        );
    });
};

export default React.memo(Models);
