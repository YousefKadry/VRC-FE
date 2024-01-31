import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cloud, Clouds } from '@react-three/drei';

import { IAppStore } from '../../../../models/app-store';
import { IRoomObject } from '../../../../models/room';
import { TAppDispatch } from '../../../../store/app-store';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import RoomObjectUtil from '../../../../utilities/room-object';

const SpaceClouds = () => {
    const clouds = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.clouds);
    const dispatch = useDispatch<TAppDispatch>();

    const handleObjectSelection = (objectId: IRoomObject['id']) => {
        dispatch(storeRoomsSliceActions.selectObject({ type: 'clouds', id: objectId }));
    };

    return (
        <Clouds>
            {Object.values(clouds || {}).map((cloud) => {
                const { id, color, rotation, ...restProps } = cloud;

                return (
                    <Clouds
                        key={id}
                        rotation={RoomObjectUtil.convertRotationFromDegreeToEuler(rotation)}
                        {...restProps}
                        onClick={() => handleObjectSelection(id)}
                    >
                        <Cloud color={color} />
                    </Clouds>
                );
            })}
        </Clouds>
    );
};

export default React.memo(SpaceClouds);
