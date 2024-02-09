import React, { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Leva } from 'leva';
import { debounce } from 'lodash';

import Sidebar from './sidebar/Sidebar';
import Space from './space/Space';

import {
    fetchRoomByIdThunk,
    fetchSelectedRoomCollaboratorsThunk,
    saveSelectedRoomThunk,
    roomsSubscriptionThunk,
} from '../../store/slices/rooms/rooms-actions';
import { TAppDispatch } from '../../store/app-store';
import { IAppStore } from '../../models/app-store';
import { IRoom, IRoomState } from '../../models/room';

import classes from './SimulationRoom.module.css';
import { storeRoomsSliceActions } from '../../store/slices/rooms/rooms-slice';

const SimulationRoom: React.FC<{ editable: boolean }> = ({ editable }) => {
    const { roomId } = useParams();

    const userId = useSelector((store: IAppStore) => store.auth.userInfo?.id);
    const selectedRoom = useSelector((store: IAppStore) => store.rooms.selectedRoom);
    const selectedObjectInfo = selectedRoom?.state.selectedObjectInfo;

    const navigate = useNavigate();
    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        if (!roomId) {
            return;
        }

        dispatch(fetchRoomByIdThunk(roomId));
    }, [roomId]);

    useEffect(() => {
        if (userId !== selectedRoom?.ownerId) {
            return;
        }

        dispatch(fetchSelectedRoomCollaboratorsThunk());
    }, [userId, selectedRoom?.ownerId]);

    useEffect(() => {
        if (!userId || !selectedRoom?.ownerId || userId === selectedRoom?.ownerId) {
            return;
        }

        const removeCollaboratorTopic = '/user/topic/removed';

        dispatch(
            roomsSubscriptionThunk(removeCollaboratorTopic, (data) => {
                const roomId = JSON.parse(data.body).id;

                if (roomId === selectedRoom.id) {
                    dispatch(storeRoomsSliceActions.removeRoom(roomId));
                    dispatch(storeRoomsSliceActions.selectedRoom(null));
                    navigate('/rooms', { replace: true });
                }
            })
        );

        return () => {
            dispatch(storeRoomsSliceActions.unsubscribeFromRoomTopic(removeCollaboratorTopic));
        };
    }, [userId, selectedRoom?.ownerId]);

    useEffect(() => {
        saveSelectedRoomDebounce(selectedRoom);
    }, [selectedRoom]);

    useEffect(() => {
        if (!selectedRoom?.id) {
            return;
        }

        const selectedRoomUpdateTopic = `/topic/rooms/${selectedRoom?.id}`;

        dispatch(
            roomsSubscriptionThunk(selectedRoomUpdateTopic, (data) => {
                dispatch(storeRoomsSliceActions.updateSelectRoom(JSON.parse(data.body)));
            })
        );

        return () => {
            dispatch(storeRoomsSliceActions.unsubscribeFromRoomTopic(selectedRoomUpdateTopic));
        };
    }, [selectedRoom?.id]);

    const saveSelectedRoomDebounce = useCallback(
        debounce((room: IRoom<IRoomState> | null) => {
            if (!room || !room.isUpdated) {
                return;
            }

            dispatch(saveSelectedRoomThunk());
        }, 500),
        []
    );

    return (
        <>
            <title>Simulation Room</title>
            <div className={classes['space-leva-container']}>
                <Leva fill hidden={!selectedObjectInfo || !editable} />
            </div>

            <div className="flex overflow-hidden select-none">
                {editable && <Sidebar />}
                <Space isInViewMode={!editable} showModeButton={true} />
            </div>
        </>
    );
};

export default SimulationRoom;
