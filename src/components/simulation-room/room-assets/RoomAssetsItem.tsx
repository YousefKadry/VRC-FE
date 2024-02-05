import React from 'react';
import { twJoin } from 'tailwind-merge';

import { IRoomAssetsItem } from '../../../models/room-assets';

const RoomAssetsItem = React.forwardRef<HTMLLIElement, { item: IRoomAssetsItem }>((props, ref) => {
    const { thumbnailUrl } = props.item;

    return (
        <li
            ref={ref}
            className={twJoin(
                'bg-gradient-to-r from-simulation-room-gradient-from to-simulation-room-gradient-to',
                'rounded-lg p-1.5 cursor-pointer'
            )}
        >
            <div className="bg-simulation-room-gradient-color p-1 rounded-md w-full aspect-square">
                <img className="w-full h-full rounded-md" src={thumbnailUrl} />
            </div>
        </li>
    );
});

export default RoomAssetsItem;
