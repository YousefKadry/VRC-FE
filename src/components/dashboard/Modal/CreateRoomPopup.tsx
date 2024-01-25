import React, {Fragment, useEffect, useRef} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {useDispatch, useSelector} from 'react-redux';
import {storeUISliceActions} from '../../../store/slices/ui/ui-slice';
import {useNavigate} from 'react-router-dom';
import {IAppStore} from "../../../models/app-store.ts";
import appStore, {TAppDispatch} from "../../../store/app-store.ts";
import {createNewRoomThunk} from "../../../store/slices/rooms/rooms-actions.ts";

const CreateRoomPopup = () => {
    const {isCreateRoomPopupShown} = useSelector((store: IAppStore) => store.ui);
    const {selectedRoom} = useSelector((store: IAppStore) => store.rooms);
    const dispatch = useDispatch<TAppDispatch>();
    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement>(null);


    useEffect(() => {
        if (!selectedRoom) {
            return;
        }

        handleClosePopup(false);
        navigate(`/simulation-room/${selectedRoom.id}`);

    }, [selectedRoom]);

    const handleClosePopup = (isPopupOpen: boolean) => {
        dispatch(storeUISliceActions.setIsCreateRoomModalShown(isPopupOpen));
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
        <Transition.Root show={isCreateRoomPopupShown} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClosePopup}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden space-y-6 rounded-2xl bg-secondary px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-sm sm:p-6">
                                <div>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-bold text-white text-left leading-6"
                                    >
                                        Build A Room
                                    </Dialog.Title>
                                </div>

                                <div>
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
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default CreateRoomPopup;
