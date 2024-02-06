import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProtectedRoutes from './ProtectedRoutes.tsx';

import { IAppStore } from '../models/app-store';
import NotFound from '../components/not-found/NotFound.tsx';

const Home = React.lazy(() => import('../components/home/Home.tsx'));
const Contact = React.lazy(() => import('../components/Contact-Us/Contact.tsx'));

const Login = React.lazy(() => import('../components/auth/Login'));
const SignUp = React.lazy(() => import('../components/auth/SignUp'));
const ForgotPassword = React.lazy(() => import('../components/auth/ForgotPassword'));
const RestPassword = React.lazy(() => import('../components/auth/ResetPassword'));

const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const Rooms = React.lazy(() => import('../components/rooms/Rooms'));
const SimulationRoom = React.lazy(() => import('../components/simulation-room/SimulationRoom.tsx'));
const SharedRoom = React.lazy(() => import('../components/shared-room/SharedRoom.tsx'));

const AppRoutes = () => {
    const hasAutoLoginFinished = !!useSelector((store: IAppStore) => store.auth.hasAutoLoginFinished);
    const isAuth = !!useSelector((store: IAppStore) => store.auth.userInfo?.email);

    if (!hasAutoLoginFinished) {
        return null;
    }

    return (
        <Routes>
            <Route index element={<Navigate to={isAuth ? '/dashboard' : '/home'} replace />} />

            <Route element={<ProtectedRoutes redirectWhen="AUTH" redirectTo="/dashboard" />}>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<RestPassword />} />
            </Route>

            <Route element={<ProtectedRoutes redirectWhen="NOT_AUTH" redirectTo="/login" />}>
                <Route path="/" element={<MainLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="rooms" element={<Rooms />} />
                </Route>
                <Route path="/simulation-room/:roomId" element={<SimulationRoom editable={true} />} />
                <Route path="/simulation-room/:roomId/view" element={<SimulationRoom editable={false} />} />
            </Route>

            <Route path="/shared-room/:roomId" element={<SharedRoom />} />

            <Route path="/" element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default React.memo(AppRoutes);
