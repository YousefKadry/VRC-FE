import { useDispatch } from 'react-redux';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import { TMeshGeometryType } from '../../../../models/room';

export interface IMeshItemProps {
    type: TMeshGeometryType;
    imgURL: string;
}

const MeshItem: React.FC<IMeshItemProps> = (props) => {
    const dispatch = useDispatch();

    const handleMeshItemClicked = () => {
        dispatch(
            storeRoomsSliceActions.addObjects({
                meshes: [{ geometryType: props.type, color: '#ffffff' }],
            })
        );
    };

    return (
        <div
            className={'rounded-lg bg-gradient-to-r from-[#8c43e6] to-[#8b6bb2] p-0.5 cursor-grabbing'}
            onClick={handleMeshItemClicked}
        >
            <img className={'rounded-lg w-full aspect-square'} src={props.imgURL} />

            <div className={'p-2'}>
                <h4 className={'text-white font-bold'}>{props.type}</h4>
            </div>
        </div>
    );
};

export default MeshItem;
