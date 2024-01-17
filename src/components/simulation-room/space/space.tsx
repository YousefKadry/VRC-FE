import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { IStoreRoomsSlice } from "../../../models/app-store";
import Meshes from "./meshes";
import { useRef } from "react";

export default function App() {
    const starsEnabled = useSelector((state: IStoreRoomsSlice) => state.selectedRoom?.state?.stars || false);

    const orbitRef = useRef(null);

    return (
        <Canvas style={{ height: "100vh" }}>
            <OrbitControls ref={orbitRef} />

            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

            <Sky />
            {starsEnabled && <Stars />}
            <Meshes orbitRef={orbitRef} />
        </Canvas>
    );
}
