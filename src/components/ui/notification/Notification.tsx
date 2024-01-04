import React, { useEffect, useRef, useId } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast, Id } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { INotification } from '../../../models/notification';

const Notification: React.FC<{ notification: INotification | null }> = (props) => {
    const toastContainerId = useId();
    const lastNotificationId = useRef<Id>();
    const { notification } = props;
    const { content, type, id } = notification || {};

    useEffect(() => {
        if (!content || lastNotificationId.current === id) {
            return;
        }

        toast.dismiss(lastNotificationId.current);

        lastNotificationId.current = toast(content, {
            containerId: toastContainerId,
            toastId: id,
            autoClose: 5000,
            position: 'bottom-right',
            closeOnClick: false,
            theme: 'dark',
            className: 'bg-secondary',
            type: type,
        });
    }, [content, type, id, lastNotificationId, toastContainerId]);

    toast.onChange((toastItem) => {
        if (toastItem.status === 'removed') {
            toast.clearWaitingQueue({ containerId: toastContainerId });
        }
    });

    return ReactDOM.createPortal(
        <ToastContainer
            containerId={toastContainerId}
            style={{ maxWidth: '100%', width: '500px', right: 0, bottom: 0, padding: '1rem' }}
            position="bottom-right"
            limit={1}
        />,
        document.getElementById('notification')!
    );
};

export default Notification;
