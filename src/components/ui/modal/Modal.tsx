import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export interface IModalProps {
    modalTitle?: React.ReactNode;
    showModal: boolean;
    modalClosingHandler: () => void;
}

const Modal: React.FC<React.PropsWithChildren<IModalProps>> = (props) => {
    const { children, modalTitle, showModal, modalClosingHandler } = props;

    return (
        <Transition.Root show={showModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={modalClosingHandler}>
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
                    <div className="flex min-h-full w-full items-center justify-center text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden space-y-6 rounded-2xl bg-secondary p-6 mx-4 text-left shadow-xl transition-all sm:my-2 w-full max-w-sm">
                                {modalTitle && (
                                    <div>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg sm:text-xl md:text-2xl font-bold text-white text-left leading-6"
                                        >
                                            {modalTitle}
                                        </Dialog.Title>
                                    </div>
                                )}

                                <div>{children}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Modal;
