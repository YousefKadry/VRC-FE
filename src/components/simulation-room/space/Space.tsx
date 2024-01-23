/* eslint-disable prettier/prettier */
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Stars } from '@react-three/drei';

import SpaceClouds from './clouds/Clouds';

import { IAppStore } from '../../../models/app-store';

const Space = () => {
    const selectedRoom = useSelector((store: IAppStore) => store.rooms.selectedRoom);

    if (!selectedRoom) {
        return null;
    }

    return (
        <Canvas style={{ height: '100vh', width: '100%' }}>
            <ambientLight intensity={Math.PI / 2} />
            <OrbitControls />
            <Sky />
            {selectedRoom.state.stars && <Stars />}
            <SpaceClouds />
        </Canvas>
    );
};

export default Space;
