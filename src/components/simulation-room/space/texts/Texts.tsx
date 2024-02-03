import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import myFont from '../../../../assets/fonts/Roboto_Regular.json';

import { extend } from "@react-three/fiber";
import { IAppStore} from "../../../../models/app-store.ts";
import { IRoomObject } from '../../../../models/room';
import { TAppDispatch } from '../../../../store/app-store';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import RoomObjectUtil from '../../../../utilities/room-object';
import {DoubleSide} from "three";

extend({ TextGeometry });

const font = new FontLoader().parse(myFont);

const Texts = () => {

    const texts = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.texts);
    const dispatch = useDispatch<TAppDispatch>();

    const handleObjectSelection = (objectId: IRoomObject['id']) => {
        dispatch(storeRoomsSliceActions.selectObject({ type: 'texts', id: objectId }));
    };

    return Object.values(texts || {}).map((textObj) => {
        const { id, rotation, color, text, scale, position  } = textObj;
        return (
            <mesh
                key={id}
                onClick={() => handleObjectSelection(id)}
                rotation={RoomObjectUtil.convertRotationFromDegreeToEuler(rotation)}
                scale={scale}
                position={position}
            >
                <textGeometry args={[text, {font, size: 1, height: 0.3}]}/>
                <meshStandardMaterial color={color} side={DoubleSide}/>
            </mesh>
        );
    });
};

export default React.memo(Texts);
