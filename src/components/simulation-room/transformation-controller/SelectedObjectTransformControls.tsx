import { useDispatch, useSelector } from 'react-redux';
import { TransformControls } from '@react-three/drei';

import useRoomObjController from './RoomObjController';

import { IRoomObject, TVec3 } from '../../../models/room';
import { IAppStore } from '../../../models/app-store';
import { TAppDispatch } from '../../../store/app-store';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';
import RoomObjectUtil from '../../../utilities/room-object';

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
        changeColorHandler: (color) => {
            dispatch(storeRoomsSliceActions.updateSelectedObject({ color }));
        },
        deleteObjectHandler: () => {
            dispatch(storeRoomsSliceActions.deleteSelectedObject());
        },
        unselectObjectHandler: () => {
            dispatch(storeRoomsSliceActions.selectObject(null));
        },
        changeIntensityHandler: (intensity) => {
            dispatch(storeRoomsSliceActions.updateSelectedObject({ intensity }));
        },
        duplicateObjectHandle: () => {
            dispatch(storeRoomsSliceActions.duplicateSelectedObject());
        },
    });

    const handelMouseTransformation = (event: any) => {
        orbitRef.current.enabled = false;
        const { position, rotation, scale } = event.target.object;

        dispatch(
            storeRoomsSliceActions.updateSelectedObject({
                position: Object.values(position) as TVec3,
                rotation: RoomObjectUtil.convertRotationFromEulerToDegree([
                    rotation._x,
                    rotation._y,
                    rotation._z,
                ]),
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
            rotation={RoomObjectUtil.convertRotationFromDegreeToEuler(selectedObj.rotation)}
            onObjectChange={handelMouseTransformation}
            onMouseUp={() => (orbitRef.current.enabled = true)}
        />
    );
};

export default SelectedObjectTransformControls;
