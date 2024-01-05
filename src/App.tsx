import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import MainLayout from './layouts/MainLayout.tsx';
import Rooms from './components/rooms/Rooms.tsx';
import ForgotPassword from './components/auth/ForgotPassword';
import RestPassword from './components/auth/ResetPassword';
import Notification from './components/ui/notification/Notification.tsx';
import Spinner from './components/ui/spinner/Spinner.tsx';

import { IAppStore } from './models/app-store.ts';
import { TAppDispatch } from './store/app-store.ts';
import { autoLoginThunk } from './store/slices/auth/auth-actions.ts';
import { storeUISliceActions } from './store/slices/ui/ui-slice.ts';

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const SimulationRoom = React.lazy(() => import('./components/simulation-room/SimulationRoom.tsx'));

function App() {
    const notification = useSelector((store: IAppStore) => store.ui.notification);
    const isLoading = useSelector((store: IAppStore) => store.ui.isLoading);
    const token = useSelector((store: IAppStore) => store.auth.token);
    const dispatch = useDispatch<TAppDispatch>();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            return;
        }

        navigate(token ? '/dashboard' : '/login', { replace: true });
    }, [token, isLoading]);

    useEffect(() => {
        dispatch(autoLoginThunk());
    }, []);

    const handleNotificationDisappearing = () => {
        dispatch(storeUISliceActions.setNotification(null));
    };

    //todo: implement routes protection
    return (
        <>
            <Notification
                notification={notification}
                notificationDisappearingHandler={handleNotificationDisappearing}
            />

            <Spinner loading={isLoading} />

            <React.Suspense fallback={<Spinner loading={isLoading} />}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<RestPassword />} />
                    <Route path={'/'} element={<MainLayout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path={'rooms'} element={<Rooms />} />
                    </Route>
                    <Route path="/simulation-room" element={<SimulationRoom />} />
                </Routes>
            </React.Suspense>
        </>
    );
}

export default App;
