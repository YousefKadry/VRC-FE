import React from 'react';
import { Sky, Stars } from '@react-three/drei';
import { useSelector } from 'react-redux';

import EnvironmentBackground from './environment-background/EnvironmentBackground';
import SpaceClouds from './clouds/SpaceClouds';
import Models from './models/Models';
import Texts from './texts/Texts';
import Meshes from './meshes/Meshes';

import { IAppStore } from '../../../models/app-store';

const SpaceObjects = () => {
    const selectedRoom = useSelector((store: IAppStore) => store.rooms.selectedRoom);

    if (!selectedRoom) {
        return null;
    }

    return (
        <>
            <Models />
            <Texts />
            {selectedRoom.state.background ? <EnvironmentBackground /> : <Sky />}
            {selectedRoom.state.stars && <Stars />}
            <Meshes />
            <SpaceClouds />
        </>
    );
};

export default React.memo(SpaceObjects);
