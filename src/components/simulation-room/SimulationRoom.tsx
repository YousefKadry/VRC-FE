import Sidebar from "../shared/Sidebar/Sidebar";
import { Leva } from "leva";
import { useSelector } from "react-redux";
import { IAppStore } from "../../models/app-store";
import Space from "./space/space";

const SimulationRoom = () => {
    const selectedMesheID = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.selectedMeshId);

    return (
        <>
            <div
                style={{
                    width: 320,
                    position: "absolute",
                    right: 0,
                    top: 0,
                    zIndex: 100,
                    opacity: 0.8,
                }}
            >
                <Leva fill hidden={!selectedMesheID} />
            </div>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <Space />
            </div>
        </>
    );
};

export default SimulationRoom;
