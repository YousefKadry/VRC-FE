import { useDispatch, useSelector } from 'react-redux';
import { IAppStore } from '../../../../models/app-store';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import { IMesh, TVec3 } from '../../../../models/room';

const MeshItem = (item: any) => {
    const meshIntialState: IMesh = {
        geometryType: item.item.type,
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
    };
    const dispatch = useDispatch();
    const selectedRoom = useSelector((store: IAppStore) => store.rooms.selectedRoom);

    const handleMeshItemClicked = () => {
        if (!selectedRoom) {
            return;
        }

        dispatch(storeRoomsSliceActions.addObjects({ meshes: [meshIntialState] }));
    };

    return (
        <div
            className={'rounded-lg bg-gradient-to-r from-[#8c43e6] to-[#8b6bb2] p-0.5 cursor-grabbing'}
            onClick={handleMeshItemClicked}
        >
            <img className={'rounded-lg w-full aspect-square'} src={item.item.imgUrl as string} />

            <div className={'p-2'}>
                <h4 className={'text-white font-bold'}>{item.item.type as string}</h4>
            </div>
        </div>
    );
};

export default MeshItem;
