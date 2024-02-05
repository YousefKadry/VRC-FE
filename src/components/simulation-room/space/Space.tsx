import { Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { XR } from '@react-three/xr';

import SpaceXRControllers from './SpaceXRControllers';
import SpaceObjects from './SpaceObjects';
import Spinner from '../../ui/spinner/Spinner';

import SelectedObjectTransformControls from '../transformation-controller/SelectedObjectTransformControls';

import { IAppStore } from '../../../models/app-store';

export interface ISpaceProps {
    isInViewMode: boolean;
    showModeButton: boolean;
}

const Space: React.FC<ISpaceProps> = (props) => {
    const { isInViewMode, showModeButton } = props;

    const orbitRef = useRef(null);
    const selectedRoom = useSelector((store: IAppStore) => store.rooms.selectedRoom);

    if (!selectedRoom) {
        return null;
    }

    return (
        <div className="w-full h-full bg-simulation-room-bg">
            <Suspense fallback={<Spinner loading={true} />}>
                <SpaceXRControllers isInViewMode={isInViewMode} showModeButton={showModeButton} />

                <Canvas style={{ height: '100vh', width: '100%' }} camera={{ position: [-70, 85, -40] }}>
                    <XR>
                        <OrbitControls ref={orbitRef} />

                        {selectedRoom.state.ambientLight && <ambientLight intensity={Math.PI / 3} />}

                        <SpaceObjects />

                        {!isInViewMode && selectedRoom.state.selectedObjectInfo && (
                            <SelectedObjectTransformControls orbitRef={orbitRef} />
                        )}
                    </XR>
                </Canvas>
            </Suspense>
        </div>
    );
};

export default Space;
