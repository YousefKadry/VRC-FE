import { useDispatch, useSelector } from 'react-redux';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { IAppStore } from '../../../../models/app-store';
import { IRoomObject } from '../../../../models/room';
import { TAppDispatch } from '../../../../store/app-store';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import RoomObjectUtil from '../../../../utilities/room-object';
import React from 'react';

const Models = () => {
    const models = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.models);
    const dispatch = useDispatch<TAppDispatch>();
    console.log('models', models);
    const handleModelSelection = (modelId: IRoomObject['id']) => {
        dispatch(storeRoomsSliceActions.selectObject({ type: 'models', id: modelId }));
    };

    return Object.values(models || {}).map((model) => {
        const { id, URL, rotation, ...restProps } = model;
        const gltf = useLoader(GLTFLoader, URL);
        return (
            <group
                key={id}
                onClick={() => handleModelSelection(id)}
                rotation={RoomObjectUtil.convertRotationFromDegreeToEuler(rotation)}
                {...restProps}
                castShadow
                receiveShadow
            >
                <primitive object={gltf.scene} />
                {/* <meshStandardMaterial side={DoubleSide} /> */}
            </group>
        );
    });
};

export default React.memo(Models);
