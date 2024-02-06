import React from 'react';

import RoomCard from './RoomCard';

import { IRoom } from '../../models/room';

export interface IRoomsSectionProps {
    title: React.ReactNode;
    subTitle: React.ReactNode;
    noRoomsPlaceholder: React.ReactNode;
    headerActions?: React.ReactNode;
    roomList: Record<string, IRoom<string>>;
}

const RoomsSection: React.FC<IRoomsSectionProps> = (props) => {
    const { title, subTitle, noRoomsPlaceholder, headerActions, roomList } = props;

    return (
        <div className={'py-10 px-5 md:px-20 max-w-md md:max-w-full mx-auto space-y-10'}>
            <div className="flex justify-between items-start gap-4">
                <div>
                    <h1 className={'text-3xl font-bold'}>{title}</h1>
                    <p className={'xl:text-xl sm:text-lg font-semibold'}>{subTitle}</p>
                </div>

                {headerActions && <div>{headerActions}</div>}
            </div>

            {Object.keys(roomList).length > 0 ? (
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'}>
                    {Object.entries(roomList).map(([roomId, room], index) => {
                        return <RoomCard key={roomId} room={room} index={index} />;
                    })}
                </div>
            ) : (
                <div className={'flex justify-center items-center'}>
                    <p className={'text-lg font-medium'}>{noRoomsPlaceholder}</p>
                </div>
            )}
        </div>
    );
};

export default RoomsSection;
