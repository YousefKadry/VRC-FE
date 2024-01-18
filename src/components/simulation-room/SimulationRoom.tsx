import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Sidebar from '../shared/Sidebar/Sidebar';
import Space from './space/Space';
import { fetchRoomByIdThunk } from '../../store/slices/rooms/rooms-actions';
import { TAppDispatch } from '../../store/app-store';

const SimulationRoom: React.FC<{ editable: boolean }> = ({ editable }) => {
    const { roomId } = useParams();

    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        if (!roomId) {
            return;
        }

        dispatch(fetchRoomByIdThunk(roomId));
    }, [roomId]);

    return (
        <div className="flex">
            {editable && <Sidebar />}
            <Space />
        </div>
    );
};

export default SimulationRoom;
