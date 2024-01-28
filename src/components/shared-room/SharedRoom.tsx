import  { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Space from '../simulation-room/space/Space';

import { TAppDispatch } from '../../store/app-store';
import { fetchSharedRoomByIdThunk} from '../../store/slices/rooms/rooms-actions';

const SharedRoom=()=>{
    const { roomId } = useParams();
    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        if (!roomId) {
            return;
        }

        dispatch(fetchSharedRoomByIdThunk(roomId));
    }, [roomId]);

    return  <Space editable={false} />
    

}

export default SharedRoom;