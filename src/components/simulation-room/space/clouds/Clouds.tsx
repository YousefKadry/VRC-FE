import { useSelector } from 'react-redux';
import { Cloud } from '@react-three/drei';

import { IAppStore } from '../../../../models/app-store';
import { IRoomObject } from '../../../../models/room';
import { TAppDispatch } from '../../../../store/app-store';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import RoomObjectUtil from '../../../../utilities/room-object';

const SpaceClouds = () => {
    const selectedRoomClouds = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.clouds);

    return (
        <Clouds>
            {Object.values(clouds || {}).map((cloud) => {
                const { id, color, rotation, ...restProps } = cloud;

                return (
                    <Clouds
                        key={cloud.id}
                        rotation={RoomObjectUtil.convertRotationFromDegreeToEuler(rotation)}
                        {...restProps}
                        onClick={() => handleObjectSelection(id)}
                    >
                        <Cloud color={cloud.color} />
                    </Clouds>
                );
            })}
        </Clouds>
    );
};

export default SpaceClouds;
