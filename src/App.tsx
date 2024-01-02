import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import MainLayout from './layouts/MainLayout.tsx';
import Rooms from './components/rooms/Rooms.tsx';
import ForgotPassword from './components/auth/ForgotPassword';
import RestPassword from './components/auth/ResetPassword';

import { IAppStore } from './models/app-store.ts';
import { storeUISliceActions } from './store/slices/ui/ui-slice.ts';

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const SimulationRoom = React.lazy(() => import('./components/simulation-room/SimulationRoom.tsx'));

//todo add React.Suspense

function App() {
    const error = useSelector((store: IAppStore) => store.ui.error);
    const isLoading = useSelector((store: IAppStore) => store.ui.isLoading);
    const dispatch = useDispatch();

    //todo: implement auto-login

    //! temp
    //todo: implement error notification
    useEffect(() => {
        if (!error) {
            return;
        }

        alert(error);
        dispatch(storeUISliceActions.setError(''));
    }, [error]);
    
    //! temp
    // todo: implement spinner
    useEffect(() => {
        if (!isLoading) {
            console.log("==========")
            return;
        }

        console.log("loading...")
    }, [isLoading]);

    //todo: implement routes protection
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<RestPassword />} />
                <Route path={'/'} element={<MainLayout />}>
                    <Route path={'rooms'} element={<Rooms />} />
                </Route>
                <Route path="/simulation-room" element={<SimulationRoom />} />
            </Routes>
        </>
    );
}

export default App;
