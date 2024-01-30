import { Sky, Environment, useEnvironment } from "@react-three/drei"
import { useSelector } from "react-redux";
import { IAppStore } from "../../../../models/app-store";

const EnvironmentBackground = () =>
{
    const selectedBackground = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.background);
    let envMap;

    if (selectedBackground)
    {
        envMap = useEnvironment ({files: selectedBackground})
    }

    return (
        <>
            {envMap? <Environment map={envMap} background="only"/> : <Sky />}
        </>
    )
}

export default EnvironmentBackground;