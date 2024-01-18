import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { Cloud, OrbitControls, Sky, Stars } from "@react-three/drei";
import { IStoreRoomsSlice } from "../../../models/app-store";

export default function App() {
  const starsEnabled = useSelector(
    (state: IStoreRoomsSlice) => state.selectedRoom?.state?.stars || false
  );

  return (
    <Canvas style={{ height: "100vh" }}>
      <OrbitControls />
      <Sky />
      {starsEnabled && <Stars />}
      <Cloud
        position={[0, 200, 0]} // Set the position of the cloud
        scale={[2, 2, 2]} // Set the scale of the cloud
        opacity={0.5} // Set the opacity of the cloud
      />
    </Canvas>
  );
}
