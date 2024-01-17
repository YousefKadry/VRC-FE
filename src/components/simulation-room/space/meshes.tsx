import { useDispatch, useSelector } from "react-redux";
import { IAppStore } from "../../../models/app-store";
import { TAppDispatch } from "../../../store/app-store";
import { Plane, TransformControls } from "@react-three/drei";
import { storeRoomsSliceActions } from "../../../store/slices/rooms/rooms-slice";
import { IMesh, TVec3 } from "../../../models/room";
import useController from "../transformation-controller/useController";

export default function App({ orbitRef }: any) {
    const meshes = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.meshes);
    const selectedMeshID = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.selectedMeshId);
    const selectedMesh = meshes ? meshes[selectedMeshID!] : null;
    const dispatch = useDispatch<TAppDispatch>();

    const [transformationMode, hideHelpers] = useController({
        selectedMesh,
        transformationChangeHandler: (type, value) => {
            dispatch(storeRoomsSliceActions.updateSelectedMesh({ [type]: value }));
        },
    });

    const handleMeshSelection = (meshID: IMesh["id"]) => {
        dispatch(storeRoomsSliceActions.setSelectedMeshId(meshID));
    };

    const handelMouseTransformation = (event: any) => {
        orbitRef.current.enabled = true;
        const { position, rotation, scale } = event.target.object;

        dispatch(
            storeRoomsSliceActions.updateSelectedMesh({
                position: Object.values(position) as TVec3,
                rotation: [
                    (rotation._x * 180) / Math.PI,
                    (rotation._y * 180) / Math.PI,
                    (rotation._z * 180) / Math.PI,
                ] as TVec3,
                scale: Object.values(scale) as TVec3,
            })
        );
    };

    return (
        <>
            <Plane args={[10, 10, 10, 10]} rotation={[1.5 * Math.PI, 0, 0]} position={[0, 0, 0]}>
                <meshStandardMaterial attach="material" color="#f9c74f" wireframe />
            </Plane>
            {meshes &&
                Object.values(meshes).map((mesh) => {
                    const isSelected = mesh.id === selectedMeshID;
                    const show = isSelected && !hideHelpers;
                    return (
                        <group key={mesh.id}>
                            <TransformControls
                                mode={transformationMode as "scale" | "rotate" | "translate"}
                                showX={show}
                                showY={show}
                                showZ={show}
                                position={mesh.position}
                                scale={mesh.scale}
                                rotation={mesh.rotation.map((r) => (r * Math.PI) / 180) as TVec3}
                                onObjectChange={() => (orbitRef.current.enabled = false)}
                                // onPointerOut={() => (orbitRef.current.enabled = true)}
                                // onPointerOut={() => (orbitRef.current.enabled = true)}
                                // onPointerCancel={() => (orbitRef.current.enabled = true)}
                                onMouseUp={handelMouseTransformation}
                            >
                                <mesh onClick={() => handleMeshSelection(mesh.id)}>
                                    <boxGeometry />
                                    <meshStandardMaterial color="hotpink" opacity={isSelected ? 0.5 : 1} />
                                </mesh>
                            </TransformControls>
                        </group>
                    );
                })}
        </>
    );
}
