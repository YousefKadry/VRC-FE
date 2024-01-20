import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Leva } from 'leva';

import Sidebar from './sidebar/Sidebar';
import Space from './space/Space';

import { fetchRoomByIdThunk } from '../../store/slices/rooms/rooms-actions';
import { TAppDispatch } from '../../store/app-store';
import { IAppStore } from '../../models/app-store';

const SimulationRoom: React.FC<{ editable: boolean }> = ({ editable }) => {
    const { roomId } = useParams();

    const selectedObjectInfo = useSelector(
        (store: IAppStore) => store.rooms.selectedRoom?.state.selectedObjectInfo
    );
    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        if (!roomId) {
            return;
        }

        dispatch(fetchRoomByIdThunk(roomId));
    }, [roomId]);

    return (
        <>
            <div
                style={{
                    width: 320,
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    zIndex: 10,
                    opacity: 0.8,
                }}
            >
                <Leva fill hidden={!selectedObjectInfo || !editable} />
            </div>
            <div className="flex">
                {editable && <Sidebar />}
                <Space editable={editable} />
            </div>
        </>
    );
};

export default SimulationRoom;
