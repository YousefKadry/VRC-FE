import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Modal from '../../ui/modal/Modal.tsx';

import { storeUISliceActions } from '../../../store/slices/ui/ui-slice';
import { IAppStore } from '../../../models/app-store.ts';
import { TAppDispatch } from '../../../store/app-store.ts';
import { createNewRoomThunk } from '../../../store/slices/rooms/rooms-actions.ts';

const CreateRoomPopup = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const { isCreateRoomPopupShown } = useSelector((store: IAppStore) => store.ui);
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
        dispatch(storeUISliceActions.setIsCreateRoomModalShown(false));
    };

    const handleCreateRoom = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef?.current) {
            return;
        }

        const roomTitle = formRef.current['roomTitle'].value;
        const roomDescription = formRef.current['roomDescription'].value;

        if (roomTitle === '' || roomDescription === '') {
            dispatch(
                storeUISliceActions.setNotification({
                    type: 'error',
                    content: 'Please fill in all the fields',
                })
            );
            return;
        }

        dispatch(createNewRoomThunk(roomTitle, roomDescription));
    };

    return (
        <Modal
            showModal={isCreateRoomPopupShown}
            modalTitle="Build A Room"
            modalClosingHandler={handleClosePopup}
        >
            <form className="space-y-6 text-white" ref={formRef} onSubmit={handleCreateRoom}>
                <div>
                    <div className="mt-2">
                        <input
                            id="roomTitle"
                            name="roomTitle"
                            type="text"
                            placeholder={'Room Title'}
                            autoComplete="room-title"
                            required
                            className="block bg-[#3b2063] focus:outline-none w-full p-2 rounded-md border-0 py-1.5 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="mt-2">
                        <textarea
                            rows={4}
                            placeholder={'Room Description'}
                            name="roomDescription"
                            id="roomDescription"
                            className="block w-full focus:outline-none bg-[#3b2063] p-2 rounded-md border-0 py-1.5 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-gradient-to-r from-gradient1 to-gradient2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create Room
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default CreateRoomPopup;
