import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { twJoin } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

import RoomsSection from './RoomsSection.tsx';
import CreateRoomPopup from '../dashboard/Modal/CreateRoomPopup.tsx';

import {
    fetchRoomsThunk,
    fetchSharedRoomsThunk,
    roomsSubscriptionThunk,
} from '../../store/slices/rooms/rooms-actions.ts';
import { IAppStore } from '../../models/app-store.ts';
import { TAppDispatch } from '../../store/app-store.ts';
import { IRoom } from '../../models/room.ts';
import { storeUISliceActions } from '../../store/slices/ui/ui-slice.ts';
import { storeRoomsSliceActions } from '../../store/slices/rooms/rooms-slice.ts';

const Rooms = () => {
    const userId = useSelector((state: IAppStore) => state.auth.userInfo?.id);
    const rooms = useSelector((state: IAppStore) => state.rooms.rooms);
    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        dispatch(fetchRoomsThunk());
        dispatch(fetchSharedRoomsThunk());

        const addCollaboratorTopic = '/user/topic/added';
        const removeCollaboratorTopic = '/user/topic/removed';

        dispatch(
            roomsSubscriptionThunk(addCollaboratorTopic, (data) => {
                dispatch(storeRoomsSliceActions.addRoom(JSON.parse(data.body)));
            })
        );

        dispatch(
            roomsSubscriptionThunk(removeCollaboratorTopic, (data) => {
                dispatch(storeRoomsSliceActions.removeRoom(JSON.parse(data.body).id));
            })
        );

        return () => {
            dispatch(storeRoomsSliceActions.unsubscribeFromRoomTopic(addCollaboratorTopic));
            dispatch(storeRoomsSliceActions.unsubscribeFromRoomTopic(removeCollaboratorTopic));
        };
    }, []);

    const handleAddingNewRoom = () => {
        dispatch(storeUISliceActions.setIsCreateRoomModalShown(true));
    };

    const ownedRooms: Record<string, IRoom<string>> = {};
    const sharedRooms: Record<string, IRoom<string>> = {};

    for (const roomId in rooms) {
        if (rooms[roomId].ownerId === userId) {
            ownedRooms[roomId] = rooms[roomId];
        } else {
            sharedRooms[roomId] = rooms[roomId];
        }
    }

    return (
        <div>
            <CreateRoomPopup />
            <RoomsSection
                title="My Rooms"
                subTitle="You can find your rooms here."
                noRoomsPlaceholder="You haven't created any rooms yet."
                headerActions={
                    <button
                        className={twJoin(
                            'flex justify-center items-center bg-white text-primary',
                            'w-10 md:w-12 aspect-square mt-3 rounded-[50%]'
                        )}
                        onClick={handleAddingNewRoom}
                    >
                        <FontAwesomeIcon icon={faAdd} className="text-xl md:text-2xl" />
                    </button>
                }
                roomList={ownedRooms}
            />

            <RoomsSection
                title="Shared Rooms"
                subTitle="You can find the rooms that you're a collaborator in here."
                noRoomsPlaceholder="You don't have any shared rooms."
                roomList={sharedRooms}
            />
        </div>
    );
};

export default Rooms;
