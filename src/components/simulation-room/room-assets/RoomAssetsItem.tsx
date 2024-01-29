import React from 'react';

import { IRoomAssetsItem } from '../../../models/room-assets';

const RoomAssetsItem = React.forwardRef<HTMLLIElement, { item: IRoomAssetsItem }>((props, ref) => {
    const { thumbnailUrl } = props.item;

    return (
        <li ref={ref} className="rounded-lg bg-gradient-to-r from-[#8c43e6] to-[#8b6bb2] p-1 cursor-pointer">
            <div className="bg-[#e2d6f3] p-2 rounded-md w-full aspect-square">
                <img className="w-full h-full" src={thumbnailUrl} />
            </div>
        </li>
    );
});

export default RoomAssetsItem;
