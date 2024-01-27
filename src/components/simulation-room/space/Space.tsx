import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane, Sky, Stars } from '@react-three/drei';
import { ARButton, VRButton, XR } from '@react-three/xr';

import SpaceClouds from './clouds/Clouds';
import Meshes from './meshes/Meshes';
import SelectedObjectTransformControls from '../transformation-controller/SelectedObjectTransformControls';

import { IAppStore } from '../../../models/app-store';

export interface ISpaceProps {
    editable: boolean;
}

const Space: React.FC<ISpaceProps> = (props) => {
    const { editable } = props;

    const orbitRef = useRef(null);
    const selectedRoom = useSelector((store: IAppStore) => store.rooms.selectedRoom);

    if (!selectedRoom) {
        return null;
    }

    return (
        <>
            <VRButton />
            <ARButton />
            <Canvas style={{ height: '100vh', width: '100%' }} camera={{ position: [-10, 15, 20] }}>
                <XR>
                    <OrbitControls ref={orbitRef} />

                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        decay={0}
                        intensity={Math.PI}
                    />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

                    <Plane args={[10, 10, 10, 10]} rotation={[1.5 * Math.PI, 0, 0]} position={[0, 0, 0]}>
                        <meshStandardMaterial attach="material" color="#f9c74f" wireframe />
                    </Plane>

                    <Sky />
                    {selectedRoom.state.stars && <Stars />}
                    <Meshes />
                    <SpaceClouds />
                    {editable && selectedRoom.state.selectedObjectInfo && (
                        <SelectedObjectTransformControls orbitRef={orbitRef} />
                    )}
                </XR>
            </Canvas>
        </>
    );
};

export default Space;
