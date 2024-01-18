import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { Cloud, OrbitControls, Sky, Stars } from '@react-three/drei';
import { IStoreRoomsSlice } from '../../../models/app-store';

export default function App() {
    const starsEnabled = useSelector((state: IStoreRoomsSlice) => state.selectedRoom?.state?.stars || true);
    const cloudsEnabled = useSelector((state: IStoreRoomsSlice) => state.selectedRoom?.state?.clouds || true);

    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={Math.PI / 2} />
            <OrbitControls />
            <Sky />
            {starsEnabled && <Stars />}
            {cloudsEnabled && <Cloud />}
        </Canvas>
    );
}
