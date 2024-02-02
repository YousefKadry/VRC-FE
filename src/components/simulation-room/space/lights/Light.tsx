import { useSelector } from 'react-redux';
import { useTexture } from '@react-three/drei';

import { ILight } from '../../../../models/room';
import { IAppStore } from '../../../../models/app-store';

import spotlightIcon from '../../../../assets/icons/spotlight.png';
import pointLightIcon from '../../../../assets/icons/pointlight.png';

export interface ILightProps {
    type: ILight['type'];
    color: ILight['color'];
    intensity: ILight['intensity'];
}

const LightItem: React.FC<React.PropsWithChildren<ILightProps>> = ({ type, intensity, color }) => {
    const light = {
        point: <pointLight intensity={intensity} color={color} castShadow />,
        spot: <spotLight intensity={intensity} color={color} castShadow />,
    };
    const selectedRoom = useSelector((store: IAppStore) => store.rooms.selectedRoom);

    const icon = { point: pointLightIcon, spot: spotlightIcon };
    const texture = useTexture(icon[type]);
    return (
        <>
            {!selectedRoom?.state.hideLightIcons && (
                <sprite>
                    <spriteMaterial attach="material" map={texture} color={color} />
                </sprite>
            )}
            {light[type]}
        </>
    );
};

export default LightItem;
