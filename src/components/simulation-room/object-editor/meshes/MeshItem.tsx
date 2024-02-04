import { useDispatch } from 'react-redux';
import { twJoin } from 'tailwind-merge';

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
        <li
            className={twJoin(
                'bg-gradient-to-r from-simulation-room-gradient-from to-simulation-room-gradient-to',
                'text-simulation-room-gradient-color',
                'rounded-lg p-1 cursor-grabbing'
            )}
            onClick={handleMeshItemClicked}
        >
            <img className={'rounded-lg w-full aspect-square'} src={props.imgURL} />

            <div className={'p-2'}>
                <h4 className={'font-bold capitalize text-sm'}>{props.type}</h4>
            </div>
        </li>
    );
};

export default MeshItem;
