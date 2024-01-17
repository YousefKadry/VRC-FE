import {Fragment, useRef, useState} from 'react'
// @ts-ignore
import { Dialog, Transition } from '@headlessui/react'

const CreateRoomPopup = () => {
    const [open, setOpen] = useState(true)
    const formRef = useRef(null);

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(formRef.current['roomName'].value);
        console.log(formRef.current['roomDescription'].value);

        // TODO: Add logic to create room
    }


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
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
                            <Dialog.Panel className="relative transform overflow-hidden space-y-6 rounded-2xl bg-secondary px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-sm sm:p-6">
                                <div>
                                        <Dialog.Title as="h3" className="text-2xl font-bold text-white text-left leading-6">
                                           Build A Room
                                        </Dialog.Title>
                                </div>

                                <div>
                                    <form className="space-y-6 text-white" ref={formRef}>
                                        <div>
                                            <div className="mt-2">
                                                <input
                                                    id="roomName"
                                                    name="roomName"
                                                    type="text"
                                                    placeholder={"Room Name"}
                                                    autoComplete="roomName"
                                                    required
                                                    className="block bg-[#3b2063] focus:outline-none w-full p-2 rounded-md border-0 py-1.5 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="mt-2">
                                                <textarea
                                                    rows={4}
                                                    placeholder={"Room Description"}
                                                    name="roomDescription"
                                                    id="roomDescription"
                                                    className="block w-full focus:outline-none bg-[#3b2063] p-2 rounded-md border-0 py-1.5 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                                    defaultValue={''}
                                                />
                                            </div>
                                        </div>


                                        <div>
                                            <button
                                                onClick={onSubmit}
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
    )
}

export default CreateRoomPopup;
