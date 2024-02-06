import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Leva } from 'leva';
import { debounce } from 'lodash';
import { Client } from '@stomp/stompjs';

import Sidebar from './sidebar/Sidebar';
import Space from './space/Space';

import {
    fetchRoomByIdThunk,
    fetchSelectedRoomCollaboratorsThunk,
    saveSelectedRoomThunk,
    selectedRoomUpdateSubscriptionThunk,
} from '../../store/slices/rooms/rooms-actions';
import { TAppDispatch } from '../../store/app-store';
import { IAppStore } from '../../models/app-store';
import { IRoom, IRoomState } from '../../models/room';

import classes from './SimulationRoom.module.css';

const SimulationRoom: React.FC<{ editable: boolean }> = ({ editable }) => {
    const { roomId } = useParams();

    const userId = useSelector((store: IAppStore) => store.auth.userInfo?.id);
    const selectedRoom = useSelector((store: IAppStore) => store.rooms.selectedRoom);
    const selectedObjectInfo = selectedRoom?.state.selectedObjectInfo;

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
        saveSelectedRoomDebounce(selectedRoom);
    }, [selectedRoom]);

    useEffect(() => {
        if (!selectedRoom?.id) {
            return;
        }

        const wsClientRef: [Client | null] = [null];
        dispatch(selectedRoomUpdateSubscriptionThunk(wsClientRef));

        return () => {
            wsClientRef[0]?.deactivate({
                force: true,
            });
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
