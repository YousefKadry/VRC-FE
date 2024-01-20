import { useDispatch, useSelector } from 'react-redux';
import { TransformControls } from '@react-three/drei';

import { IRoomObject, TVec3 } from '../../../models/room';
import { IAppStore } from '../../../models/app-store';
import { TAppDispatch } from '../../../store/app-store';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';
import useRoomObjController from './RoomObjController';

export interface IObjectTransformControlsProps {
    orbitRef: any;
}

const SelectedObjectTransformControls: React.FC<IObjectTransformControlsProps> = (props) => {
    const { orbitRef } = props;

    const roomState = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state);
    const selectedObjectInfo = roomState?.selectedObjectInfo;
    const selectedObj =
        selectedObjectInfo && roomState[selectedObjectInfo.type][selectedObjectInfo.id as string];
    const dispatch = useDispatch<TAppDispatch>();

    const [transformationMode, hideHelpers] = useRoomObjController({
        selectedObj: selectedObj as IRoomObject,
        transformationChangeHandler: (type, value) => {
            dispatch(storeRoomsSliceActions.updateSelectedObject({ [type]: value }));
        },
    });

    const handelMouseTransformation = (event: any) => {
        orbitRef.current.enabled = false;
        const { position, rotation, scale } = event.target.object;

        dispatch(
            storeRoomsSliceActions.updateSelectedObject({
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

    if (!selectedObj || hideHelpers) {
        return null;
    }

    return (
        <TransformControls
            mode={transformationMode as 'scale' | 'rotate' | 'translate'}
            position={selectedObj.position}
            scale={selectedObj.scale}
            rotation={selectedObj.rotation.map((r: number) => (r * Math.PI) / 180) as TVec3}
            onObjectChange={handelMouseTransformation}
            onMouseUp={() => (orbitRef.current.enabled = true)}
        />
    );
};

export default SelectedObjectTransformControls;
