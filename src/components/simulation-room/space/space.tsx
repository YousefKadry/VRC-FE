import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { IStoreRoomsSlice } from '../../../models/app-store';

export default function App() {
    const starsEnabled = useSelector((state: IStoreRoomsSlice) => state.selectedRoom?.state?.stars || false);
  
    return (
      <Canvas style={{height:"100vh"}}>
        <OrbitControls />
        <Sky />
        {starsEnabled && <Stars />}
      </Canvas>
    );
  }