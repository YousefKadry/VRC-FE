import { useSelector } from 'react-redux';
import { Cloud } from '@react-three/drei';

import { IAppStore } from '../../../../models/app-store';

const SpaceClouds = () => {
    const selectedRoomClouds = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.clouds);

    return (
        <group>
            {Object.values(selectedRoomClouds || {}).map((cloud) => {
                return (
                    <Cloud
                        key={cloud.id}
                        color={cloud.color}
                        position={cloud.position}
                        rotation={cloud.rotation}
                        scale={cloud.scale}
                    />
                );
            })}
        </group>
    );
};

export default SpaceClouds;
