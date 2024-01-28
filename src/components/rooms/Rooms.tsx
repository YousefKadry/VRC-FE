import RoomCard from './RoomCard.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomsThunk } from '../../store/slices/rooms/rooms-actions.ts';
import { useEffect } from 'react';
import { TAppDispatch } from '../../store/app-store.ts';

const Rooms = () => {
    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        dispatch(fetchRoomsThunk());
    }, []);

    const { rooms } = useSelector((state: any) => state.rooms);

    // get key of rooms object
    const roomKeys: string[] = Object.keys(rooms);
    const roomValues: any[] = Object.values(rooms);

    return (
        <div className={'py-10 px-20 space-y-10'}>
            <div>
                <h1 className={'text-3xl font-bold'}>My Rooms</h1>
                <p className={'xl:text-xl sm:text-lg font-semibold'}>You can find your rooms here.</p>
            </div>

            <div>
                {roomKeys.length > 0 ? (
                    <div
                        className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-10'}
                    >
                        {roomKeys.map((_, index) => (
                            <RoomCard key={roomValues[index].id} room={roomValues[index]} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className={'flex justify-center items-center'}>
                        <p className={'text-xl font-medium'}>You have not created any rooms yet</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rooms;
