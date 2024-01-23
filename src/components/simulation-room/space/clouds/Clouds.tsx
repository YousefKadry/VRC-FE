import { useSelector } from 'react-redux';
import { Cloud } from '@react-three/drei';

import { IAppStore } from '../../../../models/app-store';

const SpaceClouds = () => {
    const selectedRoomClouds = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.clouds);
    console.log(selectedRoomClouds);

    return (
        <group>
            {Object.values(selectedRoomClouds || {}).map((cloud) => (
                <group key={cloud.id}>
                    <Cloud color={cloud.color} position={cloud.position} />
                </group>
            ))}
        </group>
    );
};

export default SpaceClouds;
