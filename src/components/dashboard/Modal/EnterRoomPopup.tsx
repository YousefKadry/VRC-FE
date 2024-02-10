import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';

import Modal from '../../ui/modal/Modal.tsx';

import { storeUISliceActions } from '../../../store/slices/ui/ui-slice.ts';
import { TAppDispatch } from '../../../store/app-store.ts';
import { IAppStore } from '../../../models/app-store.ts';
import { fetchRoomByIdThunk } from '../../../store/slices/rooms/rooms-actions.ts';

const EnterRoomPopup = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const { isEnterRoomPopupShown } = useSelector((store: IAppStore) => store.ui);
    const { selectedRoom } = useSelector((store: IAppStore) => store.rooms);
    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        if (!selectedRoom) {
            return;
        }

        handleClosePopup();
        navigate(`/simulation-room/${selectedRoom.id}`);
    }, [selectedRoom]);

    const handleClosePopup = () => {
        dispatch(storeUISliceActions.setIsEnterRoomPopupShown(false));
    };

    const handleEnterRoom = (e: any) => {
        e.preventDefault();

        if (!formRef?.current) {
            return;
        }

        const roomId = formRef.current['roomId'].value;

        if (roomId === '') {
            dispatch(
                storeUISliceActions.setNotification({
                    type: 'error',
                    content: 'Please enter a room ID',
                })
            );

            return;
        }

        dispatch(fetchRoomByIdThunk(roomId));
    };

    return (
        <Modal
            showModal={isEnterRoomPopupShown}
            modalTitle="Enter Room ID"
            modalClosingHandler={handleClosePopup}
        >
            <form className="space-y-6 text-white" ref={formRef} onSubmit={handleEnterRoom}>
                <div className="mt-2 flex rounded-md shadow-sm">
                    <input
                        type="text"
                        name="roomId"
                        id="roomId"
                        className="block w-full focus:outline-none --pop-up-bg rounded-l-md border-0 py-1.5 p-2 text-gray-900 placeholder:text-gray-500 sm:text-sm sm:leading-6"
                        placeholder="Room ID"
                    />
                    <button
                        type="submit"
                        className="relative bg-[#2A2A2A] hover:bg-[#343434] -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gradient2"
                    >
                        <ArrowRightCircleIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EnterRoomPopup;
