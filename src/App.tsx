import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppRoutes from './routes/AppRoutes.tsx';
import Notification from './components/ui/notification/Notification.tsx';
import Spinner from './components/ui/spinner/Spinner.tsx';

import { IAppStore } from './models/app-store.ts';
import { TAppDispatch } from './store/app-store.ts';
import { autoLoginThunk } from './store/slices/auth/auth-actions.ts';
import { storeUISliceActions } from './store/slices/ui/ui-slice.ts';

function App() {
    const notification = useSelector((store: IAppStore) => store.ui.notification);
    const isLoading = useSelector((store: IAppStore) => store.ui.isLoading);

    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        dispatch(autoLoginThunk());
    }, []);

    const handleNotificationDisappearing = () => {
        dispatch(storeUISliceActions.setNotification(null));
    };

    return (
        <>
            <Notification
                notification={notification}
                notificationDisappearingHandler={handleNotificationDisappearing}
            />

            <Spinner loading={isLoading} />

            <React.Suspense fallback={<Spinner loading={isLoading} />}>
                <AppRoutes />
            </React.Suspense>
        </>
    );
}

export default App;
