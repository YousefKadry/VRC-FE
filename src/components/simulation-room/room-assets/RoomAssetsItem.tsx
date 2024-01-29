import React from 'react';

import { IRoomAssetsItem } from '../../../models/room-assets';
import { useDispatch } from 'react-redux';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';

export interface IRoomAssetsProps {
    assetType: string;
    assetURL: string;
}

const RoomAssetsItem = React.forwardRef<HTMLLIElement, { item: IRoomAssetsItem, itemProps:IRoomAssetsProps }>((props, ref) => {
    const { thumbnailUrl } = props.item;
    const {assetType, assetURL} = props.itemProps;

    const dispatch=useDispatch();
    
    const handleRoomAssetClicked = () =>
    {
        console.log(assetType)
       if (assetType==='hdri')
       {
        dispatch(storeRoomsSliceActions.updateSelectedRoomState({background: assetURL }));
       }
    }

    return (
        <li ref={ref} className="rounded-lg bg-gradient-to-r from-[#8c43e6] to-[#8b6bb2] p-1 cursor-pointer"
        onClick={handleRoomAssetClicked} >
            <div className="bg-[#e2d6f3] p-2 rounded-md w-full aspect-square">
                <img className="w-full h-full" src={thumbnailUrl} />
            </div>
        </li>
    );
});

export default RoomAssetsItem;
