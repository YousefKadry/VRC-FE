import React from 'react';
import { Plane, Sky, Stars } from '@react-three/drei';
import { useSelector } from 'react-redux';

import EnvironmentBackground from './environment-background/EnvironmentBackground';
import SpaceClouds from './clouds/SpaceClouds';
import Models from './models/Models';
import Texts from './texts/Texts';
import Meshes from './meshes/Meshes';

import { IAppStore } from '../../../models/app-store';
import Lights from './lights/Lights';

const SpaceObjects = () => {
    const selectedRoom = useSelector((store: IAppStore) => store.rooms.selectedRoom);
    const applySky = selectedRoom?.state.sky;

    if (!selectedRoom) {
        return null;
    }

    return (
        <>
            <Lights />
            {selectedRoom.state.basePlane && (
                <Plane args={[100, 100, 15, 15]} rotation={[1.5 * Math.PI, 0, 0]} position={[0, 0, 0]}>
                    <meshStandardMaterial attach="material" color="#f9c74f" wireframe />
                </Plane>
            )}

            <Models />
            <Texts />
            {selectedRoom.state.background ? <EnvironmentBackground /> : applySky ? <Sky /> : null}
            {selectedRoom.state.stars && <Stars />}
            <Meshes />
            <SpaceClouds />
        </>
    );
};

export default React.memo(SpaceObjects);
